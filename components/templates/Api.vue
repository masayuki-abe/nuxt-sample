<template>
  <main>
    <section id="p-api_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class=""
          tit-txt="Api"
        />
        <p class="f-txt">
          GoogleBooksAPIでISBNに限定した検索を行い、その内容をローカルストレージに保存する。
        </p>
      </div>
    </section><!-- /box01 -->

    <section id="p-api_box02">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Search for ISBNs on Google Books"
        />
        <dl class="p-api_box02--search">
          <dt>ISBN検索</dt>
          <dd>
            <MoleculesEtcSearchIsbn v-model="isbn" />
            <p class="resultCode">
              {{ code }}
            </p>
            <button @click="startScan">
              Scan
            </button>
            <div id="cameraArea">
              <img v-if="code.length" src="" alt="result" class="resultImg">
            </div>
            <p v-if="code.length" class="getMessage">
              取得できました
            </p>
            <button aria-label="close" @click.prevent.stop="stopScan">
              Stop
            </button>
          </dd>
          <!-- <dd><input v-model="isbn" type="text" placeholder="ISBN10 or ISBN13"></dd> -->
        </dl>
        <template v-if="message">
          <p class="p-api_box02--message">
            {{ message }}
          </p>
        </template>
        <div v-for="item in items" :key="item.id" class="p-api_box02--result">
          <MoleculesEtcSearchIsbnResult
            v-model="itemComment"
            :item-link="itemLink"
            :item-img="itemImg"
            :item-title="itemTitle"
            :item-authors="itemAuthors"
            :item-publisher="itemPublisher"
            :item-description="item.volumeInfo.description"
            :item-comment="itemComment"
            @saveBtn="saveBtn"
          />
        </div>
      </div>
    </section><!-- /box02 -->

    <section v-if="haveBooks" id="p-api_box03">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Your Favorite Books"
        />
        <ul class="c-booklist">
          <li v-for="(book, index) in books" :key="book.id">
            <MoleculesEtcModalBook
              :book-img="book.img"
              :book-link="book.link"
              :book-title="book.title"
              :book-authors="book.authors"
              :book-publisher="book.publisher"
              :book-comment="book.comment"
              @delete-btn="deleteBtn(index)"
            />
          </li>
        </ul>
      </div>
    </section><!-- /box03 -->

    <AtomsButtonsTextBtn
      btn-style="rounded back"
      color="dark"
      link-path=""
      link-text="Back to Front"
    />
  </main>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

export default {
  data () {
    return {
      items: [],
      isbn: '',
      message: '',
      books: [],
      itemComment: '',
      itemId: '',
      itemTitle: '',
      itemLink: '',
      itemImg: '',
      itemAuthors: [],
      itemPublisher: '',
      haveBooks: false,
      modalItem: '',
      Quagga: null,
      code: ''
    }
  },
  computed: {
    faStickyNote () {
      return faStickyNote
    }
  },
  watch: {
    isbn (newIsbn, oldIsbn) {
      this.message = 'Now loading...'
      this.debouncedGetAnswer()
    }
  },
  mounted () {
    if (localStorage.getItem('books')) {
      try {
        this.books = JSON.parse(localStorage.getItem('books'))
        this.haveBooks = true
      } catch (e) {
        localStorage.removeItem('books')
        this.haveBooks = false
      }
    }
  },
  created () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer () {
      if (this.isbn) {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + this.isbn).then((response) => {
          this.items = response.data.items
          this.itemId = response.data.items[0].id
          this.itemLink = response.data.items[0].volumeInfo.previewLink
          this.itemTitle = response.data.items[0].volumeInfo.title
          this.itemImg = response.data.items[0].volumeInfo.imageLinks.thumbnail
          this.itemAuthors = response.data.items[0].volumeInfo.authors
          this.itemPublisher = response.data.items[0].volumeInfo.publisher
        })
      }
      this.message = ''
    },
    saveBtn () {
      let saveGroup = {
        id: this.itemId,
        link: this.itemLink,
        title: this.itemTitle,
        img: this.itemImg,
        authors: this.itemAuthors,
        publisher: this.itemPublisher,
        comment: this.itemComment
      }
      this.books.unshift(saveGroup)
      saveGroup = ''
      this.isbn = ''
      this.items = ''
      this.itemComment = ''
      this.saveBook()
      this.haveBooks = true
    },
    saveBook () {
      const parsed = JSON.stringify(this.books)
      localStorage.setItem('books', parsed)
    },
    deleteBtn (x) {
      this.books.splice(x, 1)
      this.saveBook()
    },
    startScan () {
      this.code = ''
      this.initQuagga()
    },
    stopScan () {
      this.Quagga.offProcessed(this.onProcessed)
      this.Quagga.offDetected(this.onDetected)
      this.Quagga.stop()
    },
    initQuagga () {
      this.Quagga = require('quagga')
      this.Quagga.onProcessed(this.onProcessed)
      this.Quagga.onDetected(this.onDetected)

      // 設定
      const config = {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#cameraArea'),
          constraints: { facingMode: 'environment' }
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: { readers: ['ean_reader', 'ean_8_reader'] }
      }
      this.Quagga.init(config, this.onInit)
    },
    onInit (err) {
      if (err) {
        console.log(err)
        return
      }
      console.info('Initialization finished. Ready to start')
      this.Quagga.start()
    },
    onDetected (success) {
      this.code = success.codeResult.code
      // 取得時の画像を表示
      const $resultImg = document.querySelector('.resultImg')
      $resultImg.setAttribute('src', this.Quagga.canvas.dom.image.toDataURL())
      this.Quagga.stop()
    },
    onProcessed (result) {
      const drawingCtx = this.Quagga.canvas.ctx.overlay
      const drawingCanvas = this.Quagga.canvas.dom.overlay

      if (result) {
        // 検出中の緑の線の枠
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height)
          const hasNotRead = box => box !== result.box
          result.boxes.filter(hasNotRead).forEach((box) => {
            this.Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: 'green',
              lineWidth: 2
            })
          })
        }

        // 検出に成功した瞬間の青い線の枠
        if (result.box) {
          this.Quagga.ImageDebug.drawPath(
            result.box,
            { x: 0, y: 1 },
            drawingCtx,
            {
              color: 'blue',
              lineWidth: 2
            }
          )
        }

        // 検出に成功した瞬間の水平の赤い線
        if (result.codeResult && result.codeResult.code) {
          this.Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            {
              color: 'red',
              lineWidth: 3
            }
          )
        }
      }
    }
  }
}
</script>

<style lang="scss">
.c-btn_text.back{
  width: 50%;
  margin: 0 auto;
}
#p-api{
  &_box01{
    padding-bottom: per(100, $tab);
  }
  &_box02{
    padding-bottom: per(100, $tab);
    .p-api_box02{
      &--search{
        padding-bottom: per(30, $tab);
        dt{
          @include fontSet(32, 32, 100, $tab);
          @include ta(center);
          padding-bottom: 1em;
        }
        dd{
          @include fontSet(32, 32, 100, $tab);
          padding: 0 1em;
          input{
            @include fontSet(32, 32, 100, $tab);
            @include dis(inline-block);
            @include ta(center);
            width: 100%;
            padding: 0.5em;
            border-radius: 0.5em;
          }
        }
      }
      &--message{
        @include fontSet(32, 32, 100, $tab);
        @include ta(center);
        padding-bottom: 1em;
        color: $gray;
      }
    }
  }
  &_box03{
    padding-bottom: per(100, $tab);
  }
}
@include lap() {
  #p-api{
    &_box01{
      padding-bottom: per(60, $lap);
    }
    &_box02{
      padding-bottom: per(60, $lap);
      .p-api_box02{
        &--search{
          padding-bottom: per(30, $lap);
          dt{
            @include fontSet(16, 16, 100, $lap);
            @include ta(center);
            padding-bottom: 1em;
          }
          dd{
            @include fontSet(16, 16, 100, $lap);
            width: 50%;
            margin: 0 auto;
            padding: 0 1em;
            input{
              @include fontSet(16, 16, 100, $lap);
              @include dis(inline-block);
              @include ta(center);
              width: 100%;
              padding: 0.5em;
              border-radius: 0.5em;
            }
          }
        }
        &--message{
          @include fontSet(16, 16, 100, $tab);
          @include ta(center);
          padding-bottom: 1em;
          color: $gray;
        }
      }
    }
    &_box03{
      padding-bottom: per(60, $lap);
      .c-modal_content{
        padding: 40px;
        @include dflex(sb,fs);
      }
    }
  }
}
</style>
