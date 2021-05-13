<template>
  <div class="c-accordion">
    <component
      :is="acoTitleTag"
    >
      <button class="c-accordion_btn" type="button" :class="{ 'active' : isOpen }" @click="acoToggle">
        <span>{{ acoTitle }}</span>
        <IcnArrow />
      </button>
    </component>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="c-accordion_body" :class="{ 'active' : isOpen }">
        <div class="c-accordion_body--inner">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import IcnArrow from '@/components/atoms/icons/ArrowIcn'

export default {
  components: {
    IcnArrow
  },
  props: {
    acoTitleTag: {
      type: String,
      default: ''
    },
    acoTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    acoToggle () {
      this.isOpen = !this.isOpen
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

<style lang="scss" scoped>
.c-accordion_body{
  height: 0;
  transition: height 1s ease;
}
.accordion-enter-active{
  animation: aco-open 1s ease .2s both;
}
.accordion-leave-active{
  animation: aco-close 1s ease both;
}

@keyframes aco-open{
  0%{opacity: 0;}
  100%{opacity: 1;}
}
@keyframes aco-close{
  0%{opacity: 1;}
  100%{opacity: 0;}
}
</style>
