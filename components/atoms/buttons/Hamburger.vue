<template>
  <div
    class="l-hamburger btn-hamburger"
    @click="btnMenu"
  >
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  methods: {
    btnMenu () {
      this.$emit('btnMenu')
    }
  }
}
</script>
