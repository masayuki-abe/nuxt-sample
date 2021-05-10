<template>
  <ul class="c-list_sample">
    <li v-for="sample in samples" :key="sample.id" class="c-modal" :class="sample.path">
      <BtnText
        btn-style="modal"
        :link-text="sample.name"
        color="white"
        @open-modal="openModal(sample)"
      />
      <Modal
        v-if="modalFlag"
        @close-modal="closeModal"
      >
        <dl>
          <dt>
            <span>{{ postItem.name }}</span><br>
            {{ postItem.nameJa }}
          </dt>
          <dd>
            <p class="comment">
              {{ postItem.comment }}
            </p>
            <BtnText
              btn-style="border"
              color="dark"
              :link-path="postItem.path"
              :link-text="postItem.name"
            />
          </dd>
        </dl>
      </Modal>
    </li>
  </ul>
</template>

<script>
import BtnText from '@/components/atoms/buttons/TextBtn'
import Modal from '@/components/atoms/etc/Modal'

export default {
  components: {
    BtnText,
    Modal
  },
  data () {
    return {
      modalFlag: false,
      postItem: ''
    }
  },
  computed: {
    samples () {
      const sampleList = [
        {
          id: '1',
          path: 'hamburger-menu',
          name: 'Hamburger Menu',
          nameJa: 'ハンバーガーメニュー',
          comment: '言わずと知れた「三本線」のボタンクリックでメニューの開閉を実行。ヘッダ右上のボタンがそれ。'
        },
        {
          id: '2',
          path: 'modal-window',
          name: 'Modal Window',
          nameJa: 'モーダルウィンドウ',
          comment: 'ウィンドウ内で、「子ウィンドウ」を展開。課題あり。どう解決するか。'
        }
      ]
      return sampleList
    }
  },
  methods: {
    openModal (sample) {
      this.modalFlag = true
      this.postItem = sample
    },
    closeModal () {
      this.modalFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
