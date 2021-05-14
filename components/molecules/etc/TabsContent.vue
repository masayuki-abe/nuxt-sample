<template>
  <div class="tabBlock__inner">
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
