<template>
  <header id="header">
    <div class="header__inner">
      <h1>Header</h1>
      <BtnHamburger
        :class="{active : gnaviOn}"
        @btnMenu="toggleMenu"
      />
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <nav
        v-show="gnaviOn"
        class="gnavi"
      >
        <NaviList />
      </nav>
    </transition>
  </header>
</template>

<script>
import BtnHamburger from '@/components/atoms/buttons/hamburger'
import NaviList from '@/components/molecules/lists/navilist'

export default {
  components: {
    BtnHamburger,
    NaviList
  },
  data () {
    return {
      gnaviOn: false
    }
  },
  methods: {
    toggleMenu () {
      this.gnaviOn = !this.gnaviOn
    }
  }
}
</script>

<style lang="scss" scoped>
#header{
  position: relative;
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
