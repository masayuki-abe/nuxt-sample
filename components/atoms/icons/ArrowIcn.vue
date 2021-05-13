<template>
  <span
    class="icon arrow"
  />
</template>

<style lang="scss" scoped>
span{
  @include dis(inline-block);
  width: 0.5em;
  height: 0.5em;
  border-right: 2px $black solid;
  border-bottom: 2px $black solid;
  transform: rotate(-45deg);
}
</style>
