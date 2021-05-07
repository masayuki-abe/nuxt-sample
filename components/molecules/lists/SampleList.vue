<template>
  <ul class="sample-list">
    <li v-for="sample in samples" :key="sample.id" :class="sample.hash">
      <BtnText
        btn-style="modal"
        :link-text="sample.name"
        color="white"
        @open-modal="openModal"
      />
      <Modal
        v-if="modalFlag"
        @close-modal="closeModal"
      >
        <dl>
          <dt>
            <span>{{ sample.name }}</span><br>
            {{ sample.nameJa }}
          </dt>
          <dd>
            <p class="comment">
              {{ sample.comment }}
            </p>
            <BtnText
              btn-style="border"
              color="dark"
              :link-path="sample.hash"
              :link-text="sample.name"
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
      modalFlag: false
    }
  },
  computed: {
    samples () {
      const sampleList = [
        {
          id: '1',
          hash: 'hamburger-menu',
          name: 'Hamburger Menu',
          nameJa: 'ハンバーガーメニュー',
          comment: '言わずと知れた「三本線」のボタンクリックでメニューの開閉を実行。ヘッダ右上のボタンがそれ。'
        },
        {
          id: '2',
          hash: 'modal-window',
          name: 'Modal Window',
          nameJa: 'モーダルウィンドウ',
          comment: 'ウィンドウ内で、「子ウィンドウ」を展開。課題あり。どう解決するか。'
        }
      ]
      return sampleList
    }
  },
  methods: {
    openModal () {
      this.modalFlag = true
    },
    closeModal () {
      this.modalFlag = false
    }
  }
}
</script>
