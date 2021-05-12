<template>
  <div class="c-accordion">
    <component
      :is="acoTitleTag"
    >
      <button class="aco-btn" type="button" :class="{ 'active' : isOpen }" @click="acoToggle">
        {{ acoTitle }}
      </button>
    </component>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="aco-body" :class="{ 'active' : isOpen }">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
.aco-body{
  height: 0;
  transition: height 1s ease;
}
</style>
