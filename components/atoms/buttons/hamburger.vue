<template>
  <div class="btn-hamburger">
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.btn-hamburger{
  position: absolute;
  width: 10%;
  span{
    @include dis(inline-block);

    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: $dark;
    transition: margin .2s ease, opacity .1s ease .2s, transform .4s ease .2s;

    &:nth-child(1){
      margin-top: -10px;
    }
    &:nth-child(3){
      margin-top: 10px;
    }
  }
}
</style>
