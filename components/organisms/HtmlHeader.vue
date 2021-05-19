<template>
  <header id="l-header">
    <div class="l-header_inner">
      <h1>
        <Nuxt-link to="/">
          Nuxt Sample
        </Nuxt-link>
      </h1>
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
        v-if="gnaviOn || !isMobile"
        class="gnavi"
      >
        <LstNavi
          @naviLinkSp="toggleMenu"
        />
      </nav>
    </transition>
  </header>
</template>

<script>
import BtnHamburger from '@/components/atoms/buttons/Hamburger'
import LstNavi from '@/components/molecules/lists/NaviList'

export default {
  components: {
    BtnHamburger,
    LstNavi
  },
  data () {
    return {
      gnaviOn: false,
      wWidth: 1025
    }
  },
  computed: {
    isMobile () {
      return this.wWidth < 1024
    }
  },
  mounted () {
    this.wWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.wWidth = window.innerWidth
      })
    })
  },
  methods: {
    toggleMenu () {
      this.gnaviOn = !this.gnaviOn
    },
    beforeEnter (el) {
      el.style.height = '0'
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave (el) {
      el.style.height = '0'
    }
  }
}
</script>
