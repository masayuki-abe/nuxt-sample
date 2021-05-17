<template>
  <div class="c-tab_content--block-inner">
    <div v-html="tabContentText" />
  </div>
</template>

<script>
export default {
  props: {
    tabContentText: {
      type: String,
      default: ''
    }
  }
}
</script>
