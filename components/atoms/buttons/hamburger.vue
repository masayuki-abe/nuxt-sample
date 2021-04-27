<template>
  <div class="btn-hamburger" @click="btnMenu">
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

<style lang="scss" scoped>
.btn-hamburger{
  position: absolute;
  right: 0;
  top: 50%;
  width: 10%;

  span{
    @include dis(inline-block);

    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: $dark;
    transition: margin .4s ease, opacity .1s ease, transform .4s ease;

    &:nth-child(1){
      margin-top: -10px;
    }
    &:nth-child(3){
      margin-top: 10px;
    }
  }

  &.active{
    span{
      &:nth-child(1){
        margin: 0;
        transform: rotate(45deg);
      }
      &:nth-child(2){
        opacity: 0;
      }
      &:nth-child(3){
        margin: 0;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
