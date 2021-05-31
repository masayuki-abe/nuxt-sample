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
          <dd><input v-model="isbn" type="text" placeholder="ISBN10 or ISBN13"></dd>
        </dl>
        <template v-if="message">
          <p class="p-api_box02--message">
            {{ message }}
          </p>
        </template>
        <div v-for="item in items" :key="item.id" class="p-api_box02--result">
          <div class="c-bookinfo">
            <figure class="c-bookinfo_thumb">
              <a :href="itemLink" target="_blank">
                <img :src="itemImg">
              </a>
            </figure>
            <dl class="c-bookinfo_data">
              <dt class="c-bookinfo_data--title">
                {{ itemTitle }}
              </dt>
              <dd class="c-bookinfo_data--detail">
                <ul>
                  <li>
                    <dl>
                      <dt>作者</dt>
                      <dd>
                        <p v-for="(author, index) in itemAuthors" :key="index">
                          {{ author }}
                        </p>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>出版社</dt>
                      <dd>{{ itemPublisher }}</dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <p class="c-bookinfo_data--intro">
              {{ item.volumeInfo.description }}
            </p>
            <AtomsButtonsTextBtn
              btn-style="outside"
              color="dark"
              :link-path="item.volumeInfo.previewLink"
              link-text="詳細を見る"
              class="c-bookinfo_data--btn"
            />
            <dl class="c-bookinfo_comment">
              <dt>■コメント</dt>
              <dd>
                <textarea
                  v-model="itemComment"
                />
              </dd>
            </dl>
            <p class="c-bookinfo_save" @click="saveBtn">
              <span>保存する<fa :icon="faStickyNote" /></span>
            </p>
          </div>
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
          <li v-for="book in reverseBooks" :key="book.id">
            <figure class="c-booklist_thumb" @click="openModal(book)">
              <img :src="book.img">
            </figure>
            <MoleculesEtcModal
              v-if="modalFlag"
              :top-position="saveScroll"
              @close-modal="closeModal"
            >
              <figure class="c-booklist_thumb--modal">
                <a :href="modalItem.link" target="_blank">
                  <img :src="modalItem.img">
                </a>
              </figure>
              <dl class="c-booklist_data">
                <dt class="c-booklist_data--title">
                  {{ modalItem.title }}
                </dt>
                <dd>
                  <ul>
                    <li>
                      <dl>
                        <dt>作者</dt>
                        <dd>
                          <p v-for="(bookAuthor, index) in modalItem.authors" :key="index">
                            {{ bookAuthor }}
                          </p>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>出版社</dt>
                        <dd>{{ modalItem.publisher }}</dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl v-if="modalItem.comment !== ''" class="c-booklist_comment">
                <dt>■コメント</dt>
                <dd>{{ modalItem.comment }}</dd>
              </dl>
              <AtomsButtonsTextBtn
                btn-style="outside"
                color="dark"
                :link-path="modalItem.link"
                link-text="詳細を見る"
                class="c-booklist_btn"
              />
            </MoleculesEtcModal>
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
      modalFlag: false,
      modalItem: '',
      scrollY: 0,
      saveScroll: ''
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.isModalOpen ? 'modal-on' : ''
      }
    }
  },
  computed: {
    faStickyNote () {
      return faStickyNote
    },
    reverseBooks () {
      return this.books.slice().reverse()
    },
    isModalOpen () {
      return this.modalFlag
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
    window.addEventListener('scroll', this.getScrollY)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScrollY)
  },
  created () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getScrollY () {
      this.scrollY = window.scrollY
    },
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
      this.books.push(saveGroup)
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
    openModal (book) {
      this.modalFlag = true
      this.modalItem = book
      this.getScrollY()
      this.saveScroll = this.scrollY
    },
    closeModal () {
      this.modalFlag = false
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
