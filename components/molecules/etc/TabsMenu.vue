<template>
  <span>
    {{ tabMenuName }}
  </span>
</template>

<script>
export default {
  props: {
    tabMenuName: {
      type: String,
      default: ''
    }
  }
}
</script>
