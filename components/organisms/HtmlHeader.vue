<template>
  <header id="header">
    <div class="header__inner">
      <h1>Header</h1>
      <BtnHamburger />
    </div>
  </header>
</template>

<script>
import BtnHamburger from '@/components/atoms/buttons/hamburger'

export default {
  components: {
    BtnHamburger
  }
}
</script>

<style lang="scss" scoped>
#header{
  padding: per(20, $tab);

  .header__inner{
    position: relative;
    width: 100%;

    h1{
      padding: .5em 0;
      line-height: 1;
    }
  }
}
</style>
