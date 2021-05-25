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
          <input type="hidden" :value="itemId" @input="itemId=item.id">
          <input type="hidden" :value="item.volumeInfo.previewLink" @input="itemLink=item.volumeInfo.previewLink">
          <input type="hidden" :value="item.volumeInfo.imageLinks.thumbnail" @input="itemImg=item.volumeInfo.imageLinks.thumbnail">
          <input type="hidden" :value="item.volumeInfo.authors" @input="itemAuthors=item.volumeInfo.authors">
          <input type="hidden" :value="item.volumeInfo.publisher" @input="itemPublisher=item.volumeInfo.publisher">
          <div class="c-bookinfo">
            <figure class="c-bookinfo_thumb">
              <a :href="item.volumeInfo.previewLink" target="_blank">
                <img :src="item.volumeInfo.imageLinks.thumbnail">
              </a>
            </figure>
            <dl class="c-bookinfo_data">
              <dt>{{ item.volumeInfo.title }}</dt>
              <dd>
                <p class="c-bookinfo_data--intro">
                  {{ item.volumeInfo.description }}
                </p>
                <ul>
                  <li>
                    <dl>
                      <dt>作者</dt>
                      <dd>{{ item.volumeInfo.authors }}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>出版社</dt>
                      <dd>{{ item.volumeInfo.publisher }}</dd>
                    </dl>
                  </li>
                </ul>
                <AtomsButtonsTextBtn
                  btn-style="outside"
                  color="dark"
                  :link-path="item.volumeInfo.previewLink"
                  link-text="詳細を見る"
                  class="c-bookinfo_data--btn"
                />
              </dd>
            </dl>
            <dl class="c-bookinfo_comment">
              <dt>■コメント</dt>
              <dd>
                <textarea
                  v-model="itemComment"
                />
              </dd>
            </dl>
            <p class="c-bookinfo_save" @click="saveBtn">
              保存する
            </p>
          </div>
        </div>
      </div>
    </section><!-- /box02 -->

    <section id="p-app_box03">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Your favarite Books"
        />
        <ul class="c-booklist">
          <li v-for="book in books" :key="book.title">
            <figure class="c-booklist_thumb">
              <a :href="book.volumeInfo.previewLink" target="_blank">
                <img :src="book.volumeInfo.imageLinks.thumbnail">
              </a>
            </figure>
            <dl class="c-booklist_data">
              <dt>{{ book.volumeInfo.title }}</dt>
              <dd>
                <ul>
                  <li>
                    <dl>
                      <dt>作者</dt>
                      <dd>{{ book.volumeInfo.authors }}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>出版社</dt>
                      <dd>{{ book.volumeInfo.publisher }}</dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </section><!-- /box03 -->
  </main>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  data () {
    return {
      query: '',
      items: [],
      isbn: '',
      message: '',
      books: [],
      itemComment: '',
      itemId: '',
      itemLink: '',
      itemImg: '',
      itemAuthors: '',
      itemPublisher: ''
    }
  },
  watch: {
    isbn (newIsbn, oldIsbn) {
      this.message = 'Now loading...'
      this.debouncedGetAnswer()
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
        })
      }
      this.message = ''
      console.log('ID[' + this.itemId + ']')
      console.log('LINK[' + this.itemLink + ']')
      console.log('IMG[' + this.itemImg + ']')
      console.log('AUTHORS[' + this.itemAuthors + ']')
      console.log('PUBLISHER[' + this.itemPublisher + ']')
      console.log('COMMENT[' + this.itemComment + ']')
    },
    saveBtn () {
      let saveGroup = {
        id: this.itemId,
        link: this.itemLink,
        img: this.itemImg,
        authors: this.itemAuthors,
        publisher: this.itemPublisher,
        comment: this.itemComment
      }
      this.books.push(saveGroup)
      saveGroup = ''
      this.saveBook()
    },
    saveBook () {
      const parsed = JSON.stringify(this.books)
      localStorage.setItem('bsooks', parsed)
    }
  }
}
</script>
