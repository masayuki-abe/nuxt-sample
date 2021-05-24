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
        <p> ISBN検索：</p>
        <form @submit.prevent="getResult(query)">
          <input v-model="query" type="text" placeholder="ISBN10 / ISBN13">
          <div v-for="item in items" :key="item.id">
            <div>
              <div>
                <img :src="item.volumeInfo.imageLinks.thumbnail">
              </div>
              <div>
                <div>
                  <h5>
                    {{ item.volumeInfo.title }}
                  </h5>
                  <p>
                    {{ item.volumeInfo.authors }}
                  </p>
                  <p>
                    <small>{{ item.volumeInfo.publisher }}</small>
                  </p>
                </div>
                <div>
                  <a :href="item.volumeInfo.previewLink" target="_blank">show detail</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section><!-- /box02 -->
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      query: '',
      items: []
    }
  },
  mounted () {
    this.getResult()
  },
  methods: {
    getResult (query) {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + query).then((response) => {
        this.items = response.data.items
      })
    }
  }
}
</script>
