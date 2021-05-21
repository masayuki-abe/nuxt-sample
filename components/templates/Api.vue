<template>
  <main>
    <section id="p-api_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class=""
          tit-txt="Api"
        />
        <p> Search：</p><form @submit.prevent="getResult(query)">
          <input v-model="query" type="text" placeholder="Type in your search">
          <div class="book_wrapper">
            <div v-for="item in items" :key="item.title" class="book_card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img class="card-img" :src="item.volumeInfo.imageLinks.thumbnail">
                </div>

                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ item.volumeInfo.title }}
                    </h5>
                    <p class="card-text">
                      {{ item.volumeInfo.authors }}
                    </p>
                    <p class="card-text">
                      <small class="text-muted">{{ item.volumeInfo.publisher }}</small>
                    </p>
                  </div>

                  <div class="book_button">
                    <a :href="item.volumeInfo.previewLink" class="waves-effect waves-light btn" target="_blank">show detail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
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
      axios.get('https://www.googleapis.com/books/v1/volumes?q=search' + query).then((response) => {
        console.log(response.data)
        this.items = response.data.items
      })
    }
  }
}
</script>
