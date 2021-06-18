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
            <button class="p-api_box02--search-btn-scan" @click="startScan">
              バーコードから探す<fa :icon="faCamera" />
            </button>
            <div v-show="camera" class="p-api_box02--search-scan" :style="scrollTopPosition">
              <p class="p-api_box02--search-scan-txt">
                「978」から始まるバーコードを映してください。
              </p>
              <div id="cameraArea" />
              <p v-if="isbn.length" class="getMessage">
                「{{ isbn }}」を読み取りました。
              </p>
              <button class="p-api_box02--search-btn-stop" aria-label="close" @click.prevent.stop="stopScan">
                閉じる
              </button>
            </div>
          </dd>
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
        <div v-if="booksLength > 0" class="p-api_box03--readedcount">
          <p class="p-api_box03--readedcount-books">
            あなたは<br>
            <span>{{ booksLength }}</span>冊<br>
            <span>{{ pagesCount }}</span>ページ<br>
            読みました。
          </p>
        </div>
        <ul class="c-booklist">
          <li v-for="(book, index) in books" :key="book.id">
            <MoleculesEtcModalBook
              :book-img="book.img"
              :book-img-modal="modalItem.img"
              :book-link="modalItem.link"
              :book-title-caption="book.title"
              :book-title="modalItem.title"
              :book-authors="modalItem.authors"
              :book-publisher="modalItem.publisher"
              :book-comment="modalItem.comment"
              @open-modal="openModal(book, index)"
              @delete-btn="deleteBtn()"
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
import { faStickyNote, faCamera } from '@fortawesome/free-solid-svg-icons'

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
      itemLink: [],
      itemImg: 'http://books.google.com/books/content?printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      itemAuthors: [],
      itemPublisher: '',
      haveBooks: false,
      modalItem: '',
      Quagga: null,
      code: '',
      countArray: '',
      camera: false,
      scrollPos: 0,
      readedLength: 0,
      pageMath: []
    }
  },
  computed: {
    faStickyNote () {
      return faStickyNote
    },
    faCamera () {
      return faCamera
    },
    scrollTopPosition () {
      return {
        '--top': this.$window.pageYOffset + 'px'
      }
    },
    booksLength () {
      return this.books.length.toLocaleString()
    },
    pagesCount () {
      const booksCount = this.books.reduce(function (sum, element) {
        return sum + element.count
      }, 0).toLocaleString()
      return booksCount
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
          if (response.data.items[0].volumeInfo.imageLinks.thumbnail) {
            this.itemImg = response.data.items[0].volumeInfo.imageLinks.thumbnail
          }
          this.itemAuthors = response.data.items[0].volumeInfo.authors
          this.itemPublisher = response.data.items[0].volumeInfo.publisher
          this.itemCount = response.data.items[0].volumeInfo.pageCount
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
        comment: this.itemComment,
        count: this.itemCount,
        flag: false
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
    openModal (book, index) {
      this.$store.commit('Modal/openModal')
      this.modalItem = book
      this.countArray = index
    },
    deleteBtn () {
      this.books.splice(this.countArray, 1)
      this.saveBook()
      this.$store.commit('Modal/closeModal')
    },
    readedBooks () {
      this.readedLength = this.booksLength
    },
    readedPages () {
      this.pageMath = this.pagesCount
    },
    startScan () {
      this.code = ''
      this.initQuagga()
      this.camera = true
    },
    stopScan () {
      this.Quagga.offProcessed(this.onProcessed)
      this.Quagga.offDetected(this.onDetected)
      this.Quagga.stop()
      this.camera = false
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
          constraints: {
            decodeBarCodeRate: 3,
            successTimeout: 500,
            codeRepetition: true,
            tryVertical: true,
            frameRate: 15,
            width: 640,
            height: 480,
            facingMode: 'environment'
          },
          area: {
            top: '30%',
            right: '0%',
            bottom: '30%',
            left: '0%'
          }
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: {
          readers: ['ean_reader'],
          multiple: false
        },
        locate: true
      }
      this.Quagga.init(config, this.onInit)
    },
    onInit (err) {
      if (err) {
        return
      }
      this.Quagga.start()
    },
    onDetected (success) {
      this.code = success.codeResult.code
      if (this.code.slice(0, 3) === '978') {
        this.isbn = this.code
        this.Quagga.stop()
        this.camera = false
      }
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
            margin-bottom: 1em;
            padding: 0.5em;
            border-radius: 0.5em;
          }
          .p-api_box02--search-btn-scan{
            @include fontSet(32, 32, 100, $tab);
            @include dis(block);
            @include ta(center);
            width: 70%;
            margin: 0 auto;
            padding: 0.5em;
          }
          .p-api_box02--search-scan{
            @include dflex(c,c);
            flex-direction: column;
            position: absolute;
            left: 0;
            top: var(--top);
            z-index: 9999;
            width: 100%;
            height: 100%;
            background-color: rgba($dark, 0.7);
            .p-api_box02--search-scan-txt{
              @include fontSet(32,46,100,$tab);
              padding: 0 1em 1em;
              color: $white;
              font-weight: 700;
            }
            #cameraArea{
              position: relative;
              width: 100%;
              height: 0;
              padding-top: (480/640)*100%;
              margin: 0 auto;
              video{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                margin: 0;
              }
              canvas{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                margin: 0;
              }
              // .drawingBuffer{
              //   margin-left: -480px;
              // }
            }
            .getMessage{
              @include fontSet(32,46,100,$tab);
              padding: 1em;
              color: $white;
              font-weight: 700;
            }
            .p-api_box02--search-btn-stop{
              @include fontSet(32,32,100,$tab);
              @include dis(inline-block);
              margin-top: 1em;
              padding: .5em 1em;
              background-color: transparent;
              border: 1px $white solid;
              color: $white;

            }
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
    .p-api_box03{
      &--readedcount{
        @include fontSet(32,52,100, $tab);
        padding-bottom: 1em;
        &-books{
          @include ta(center);
          span{
            @include fontSet(42, 42, 100, $tab);
            font-weight: 700;
          }
        }
      }
    }
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
            .p-api_box02--search-btn-scan{
              @include dis(none);
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
