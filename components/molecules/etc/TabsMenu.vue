<template>
  <span>
    {{ tabMenuName }}
  </span>
</template>

<script>
export default {
  props: {
    tabMenuClass: {
      type: String,
      default: ''
    },
    tabMenuName: {
      type: String,
      default: ''
    }
  }
}
</script>
