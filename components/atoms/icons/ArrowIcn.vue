<template>
  <span
    class="icon arrow"
  />
</template>

<style lang="scss" scoped>
span{
  @include dis(inline-block);
  position: absolute;
  width: 1em;
  height: 1em;
  transform: rotate(-45deg);

  &:before,
  &:after{
    @include dis(inline-block);
    content: '';
    position: absolute;
    background-color: $black;
  }
  &:before{
    right: 0;
    top: 0;
    width: 3px;
    height: 100%;
  }
  &:after{
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
  }
}
</style>
