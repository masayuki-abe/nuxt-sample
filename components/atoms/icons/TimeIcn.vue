<template>
  <span
    class="icon time"
  />
</template>

<style lang="scss" scoped>
span{
  @include dis(inline-block);

  position: absolute;
  width: 1em;
  height: 1em;

  &:before,
  &:after{
    @include dis(inline-block);

    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: $white;
    margin: -50% 0 0 -50%;
  }
  &:before{
    transform: rotate(-45deg);
  }
  &:after{
    transform: rotate(45deg);
  }
}

@include lap() {
span{
  transition: opacity 0.4s ease;

  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }
}
}
</style>
