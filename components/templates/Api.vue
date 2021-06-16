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
            <!-- <p class="resultCode">
              {{ code }}
            </p> -->
            <button class="p-api_box02--search-btn-scan" @click="startScan">
              バーコードから探す<fa :icon="faCamera" />
            </button>
            <div v-show="camera" class="p-api_box02--search-scan" :style="scrollTopPosition">
              <p class="p-api_box02--search-scan-txt">
                「978」から始まるバーコードを映してください。
              </p>
              <div id="cameraArea">
                <!-- <img v-if="code.length" src="" alt="result" class="resultImg"> -->
              </div>
              <p v-if="isbn.length" class="getMessage">
                「{{ isbn }}」を読み取りました。
              </p>
              <button class="p-api_box02--search-btn-stop" aria-label="close" @click.prevent.stop="stopScan">
                閉じる
              </button>
            </div>
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
              :book-img-modal="modalItem.img"
              :book-link="modalItem.link"
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
      itemImg: '',
      itemAuthors: [],
      itemPublisher: '',
      haveBooks: false,
      modalItem: '',
      Quagga: null,
      code: '',
      countArray: '',
      camera: false,
      scrollPos: 0
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
        comment: this.itemComment,
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
    startScan () {
      this.code = ''
      this.initQuagga()
      this.camera = true
      console.log(this.camera)
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
        console.log(err)
        return
      }
      console.info('Initialization finished. Ready to start')
      this.Quagga.start()
    },
    onDetected (success) {
      this.code = success.codeResult.code
      if (this.code.slice(0, 3) === '978') {
        this.isbn = this.code
        this.Quagga.stop()
        this.camera = false
      }
      // if (this.calc(this.code)) { alert(this.code) }
      // 取得時の画像を表示
      // const $resultImg = document.querySelector('.resultImg')
      // $resultImg.setAttribute('src', this.Quagga.canvas.dom.image.toDataURL())
      // this.Quagga.stop()
    },
    calc (isbn) {
      const arrIsbn = isbn
        .toString()
        .split('')
        .map(num => parseInt(num))
      let remainder = 0
      const checkDigit = arrIsbn.pop()

      arrIsbn.forEach((num, index) => {
        remainder += num * (index % 2 === 0 ? 1 : 3)
      })
      remainder %= 10
      remainder = remainder === 0 ? 0 : 10 - remainder

      return checkDigit === remainder
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
            width: 100%;
            height: 100%;
            background-color: rgba($dark, 0.7);
            .p-api_box02--search-scan-txt{
              @include fontSet(32,46,100,$tab);
              padding: 0 1em;
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
              .drawingBuffer{
                margin-left: -480px;
              }
            }
            .getMessage{
              @include fontSet(32,46,100,$tab);
              padding: 1em;
              color: $white;
              font-weight: 700;
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

#cameraArea {
    width: 300px;
    height: 300px;
    overflow: hidden;
}
#cameraArea video,
#cameraArea canvas {
    margin-top: -50px;
    width: 300px;
    height: 400px;
}
#cameraArea video.drawingBuffer, #cameraArea canvas{
margin-left: -300px;
}
button {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: 30px;
}
.resultImg {
  width: 100%;
}
.resultCode {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.getMessage {
  color: red;
}
</style>
