<template>
  <div class="c-booklist_wrap">
    <figure class="c-booklist_thumb" @click="$store.commit('Modal/openModal')">
      <img :src="bookImg">
    </figure>
    <MoleculesEtcModal
      v-if="isModalState"
      :top-position="$window.pageYOffset"
      @close-modal="$store.commit('Modal/closeModal')"
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
      <AtomsButtonsTextBtn
        btn-style="trash"
        color="red"
        link-text="本棚から削除する"
        class="c-booklist_btn--trash"
        @click.native="deleteBook"
      />
    </MoleculesEtcModal>
  </div>
</template>

<script>
export default {
  props: {
    bookArray: {
      type: Array,
      default: () => []
    },
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
  head () {
    return {
      bodyAttrs: {
        class: this.isModalState ? 'modal-on' : ''
      }
    }
  },
  computed: {
    isModalState () {
      return this.$store.state.Modal.modalFlag
    }
  },
  methods: {
    deleteBook () {
      this.$emit('delete-btn')
    }
  }
}
</script>
