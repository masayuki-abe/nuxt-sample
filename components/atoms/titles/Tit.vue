<template>
  <component
    :is="titTag"
    :class="'c-title_' + titClass"
    class="c-title"
  >
    <span>{{ titTxt }}</span>
  </component>
</template>

<script>
export default {
  props: {
    titTag: {
      type: String,
      default: ''
    },
    titClass: {
      type: String,
      default: ''
    },
    titTxt: {
      type: String,
      default: ''
    }
  }
}
</script>
