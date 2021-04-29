<template>
  <main>
    <p>FrontPage</p>

    <div class="modal-window">
      <button @click="openModal">
        Open the 'Modal Window'
      </button>
      <Modal v-if="modalFlag">
        <p>test</p>
        <p>testtesttest</p>
      </Modal>
      <button @click="closeModal">
        Close
      </button>
    </div><!--/ modal window-->
  </main>
</template>

<script>
import Modal from '@/components/atoms/etc/Modal'
export default {
  components: {
    Modal
  },
  data () {
    return {
      modalFlag: false
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
