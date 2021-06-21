<template>
  <div class="c-booklist_wrap">
    <figure class="c-booklist_thumb" @click="openModal">
      <img :src="bookImg">
      <figcaption>『{{ bookTitleCaption }}』</figcaption>
    </figure>
    <MoleculesEtcModal
      v-if="isModalState"
      :top-position="$window.pageYOffset"
      @close-modal="$store.commit('Modal/closeModal')"
    >
      <figure class="c-booklist_thumb--modal">
        <a :href="bookLink" target="_blank">
          <img :src="bookImgModal">
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
      <dl class="c-booklist_comment">
        <dt>■コメント</dt>
        <dd class="c-booklist_comment-box">
          <textarea ref="editComment" v-model="getBookComment" :class="(editFlag === true) ? 'is-editing' : ''" />
          <template v-if="editFlag === false">
            {{ bookComment }}
          </template>
        </dd>
        <dd class="c-booklist_comment-edit">
          <AtomsButtonsTextBtn
            btn-style="bookEdit"
            color="white"
            link-text="再編集"
            class="c-booklist_btn-edit"
            @click.native="editComment"
          />
        </dd>
        <dd class="c-booklist_comment-resave">
          <AtomsButtonsTextBtn
            v-if="editFlag"
            btn-style="bookResave"
            color="white"
            link-text="再保存する"
            class="c-booklist_btn-resave"
            @click.native="resaveComment"
          />
        </dd>
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
    bookImg: {
      type: String,
      default: ''
    },
    bookImgModal: {
      type: String,
      default: ''
    },
    bookLink: {
      type: null,
      default: ''
    },
    bookTitle: {
      type: String,
      default: ''
    },
    bookTitleCaption: {
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
    },
    countArray: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editFlag: false,
      editedComment: ''
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
    },
    getBookComment: {
      get () {
        return this.bookComment
      },
      set (newComment) {
        this.$emit('input', newComment)
      }
    }
  },
  methods: {
    openModal () {
      this.$emit('open-modal')
    },
    deleteBook () {
      this.$emit('delete-btn')
    },
    editComment () {
      this.editFlag = !this.editFlag
      this.$refs.editComment.focus()
    },
    resaveComment () {
      this.$emit('resave-btn')
      this.editFlag = false
      // console.log(this.countArray)
      // this.editedComment = this.bookComment
      // console.log(this.editedComment)
    }
  }
}
</script>
