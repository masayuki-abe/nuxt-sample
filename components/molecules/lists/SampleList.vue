<template>
  <ul class="sample-list">
    <li v-for="sample in samples" :key="sample.id">
      {{ sample.id }}{{ sample.name }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    samples () {
      const sampleList = [
        {
          id: '1',
          hash: 'hamburger-menu',
          name: 'Hamburger Menu',
          nameJa: 'ハンバーガーメニュー'
        },
        {
          id: '2',
          hash: 'modal-window',
          name: 'Modal Window',
          nameJa: 'モーダルウィンドウ'
        }
      ]
      return sampleList
    }
  }
}
</script>
