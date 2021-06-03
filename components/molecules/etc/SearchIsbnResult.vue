<template>
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
      {{ itemDescription }}
    </p>
    <AtomsButtonsTextBtn
      btn-style="outside"
      color="dark"
      :link-path="itemLink"
      link-text="詳細を見る"
      class="c-bookinfo_data--btn"
    />
    <dl class="c-bookinfo_comment">
      <dt>■コメント</dt>
      <dd>
        <textarea
          v-model="inputItemComment"
        />
      </dd>
    </dl>
    <p class="c-bookinfo_save" @click="saveBtn">
      <span>保存する<fa :icon="faStickyNote" /></span>
    </p>
  </div>
</template>

<script>
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    itemLink: {
      type: String,
      default: ''
    },
    itemImg: {
      type: String,
      default: ''
    },
    itemTitle: {
      type: String,
      default: ''
    },
    itemAuthors: {
      type: Array,
      default: () => []
    },
    itemPublisher: {
      type: String,
      default: ''
    },
    itemDescription: {
      type: String,
      default: ''
    },
    itemComment: {
      type: String,
      default: ''
    }
  },
  computed: {
    faStickyNote () {
      return faStickyNote
    },
    inputItemComment: {
      get () {
        return this.itemComment
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    saveBtn () {
      this.$emit('saveBtn')
    }
  }
}
</script>
