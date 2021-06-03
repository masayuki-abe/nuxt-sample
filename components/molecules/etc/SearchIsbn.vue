<template>
  <input type="text" placeholder="ISBN10 or ISBN13" v-model="inputIsbn">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputIsbn: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  }
}
</script>
