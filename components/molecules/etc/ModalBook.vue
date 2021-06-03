<template>
  <div class="c-booklist_wrap">
    <figure class="c-booklist_thumb" @click="openModal">
      <img :src="bookImg">
    </figure>
    <MoleculesEtcModal
      v-if="modalFlag"
      :top-position="saveScroll"
      @close-modal="closeModal"
    >
      <figure class="c-booklist_thumb--modal">
        <a :href="bookLink" target="_blank">
          <img :src="bookImg">
        </a>
      </figure>
      <dl class="c-booklist_data">
        <dt class="c-booklist_data--title">
          {{ bookTitle }}
        </dt>
        <dd>
          <ul>
            <li>
              <dl>
                <dt>作者</dt>
                <dd>
                  <p v-for="(bookAuthor, index) in bookAuthors" :key="index">
                    {{ bookAuthor }}
                  </p>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>出版社</dt>
                <dd>{{ bookPublisher }}</dd>
              </dl>
            </li>
          </ul>
        </dd>
      </dl>
      <dl v-if="bookComment !== ''" class="c-booklist_comment">
        <dt>■コメント</dt>
        <dd>{{ bookComment }}</dd>
      </dl>
      <AtomsButtonsTextBtn
        btn-style="outside"
        color="dark"
        :link-path="bookLink"
        link-text="詳細を見る"
        class="c-booklist_btn"
      />
    </MoleculesEtcModal>
  </div>
</template>

<script>
export default {
  props: {
    bookImg: {
      type: String,
      default: ''
    },
    bookLink: {
      type: String,
      default: ''
    },
    bookTitle: {
      type: String,
      default: ''
    },
    bookAuthors: {
      type: Array,
      default: () => []
    },
    bookPublisher: {
      type: String,
      default: ''
    },
    bookComment: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
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
    isModalOpen () {
      return this.modalFlag
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollY)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScrollY)
  },
  methods: {
    getScrollY () {
      this.scrollY = window.scrollY
    },
    openModal () {
      this.modalFlag = true
      // this.modalItem = book
      this.getScrollY()
      this.saveScroll = this.scrollY
    },
    closeModal () {
      this.modalFlag = false
    }
  }
}
</script>
