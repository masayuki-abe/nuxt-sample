<template>
  <span
    class="icon modal-open"
  />
</template>

<style lang="scss" scoped>
span{
  @include dis(inline-block);

  position: absolute;
  right: 0.5em;
  top: 50%;
  width: 1.5em;
  height: 1.2em;
  border: 2px $dark solid;
  border-radius: 2px;
  transform: translateY(-50%);

  &:before{
    content: '＋';
    position: absolute;
    right: 0;
    top: 0;
    font-size: 0.5em;
    line-height: 1;
  }

  &.white{
    border: 2px $white solid;
  }
}
</style>
