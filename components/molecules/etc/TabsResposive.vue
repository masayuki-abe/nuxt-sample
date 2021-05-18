<template>
  <div ref="tabs" class="c-tab-responsive" style="font-size: 20px;">
    <component :is="tabTag" ref="tabBtn" class="c-tab-responsive_menu">
      {{ tabName }}
    </component>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <component :is="tabBodyTag" v-show="isActive === tabId" ref="tabBody" class="c-tab-responsive_content">
        <div class="c-tab-responsive_content--block">
          <div class="c-tab-responsive-content--block-inner">
            <div v-html="tabText" />
          </div>
        </div>
      </component>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Number,
      default: 1
    },
    tabId: {
      type: Number,
      default: 1
    },
    tabTag: {
      type: String,
      default: ''
    },
    tabName: {
      type: String,
      default: ''
    },
    tabBodyTag: {
      type: String,
      default: ''
    },
    tabText: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.$window.width >= 1024) {
      this.tabs()
    }
  },
  methods: {
    beforeEnter (el) {
      if (this.$window.width < 1024) {
        el.style.height = '0'
      }
    },
    enter (el) {
      if (this.$window.width < 1024) {
        el.style.height = el.scrollHeight + 'px'
      }
    },
    beforeLeave (el) {
      if (this.$window.width < 1024) {
        el.style.height = el.scrollHeight + 'px'
      }
    },
    leave (el) {
      if (this.$window.width < 1024) {
        el.style.height = '0'
      }
    },
    tabs () {
      const tabs = this.$refs.tabs
      const tabBtn = this.$refs.tabBtn
      const tabBody = this.$refs.tabBody
      const tabBtnHeight = tabBtn.clientHeight
      const tabBodyHeight = tabBody.clientHeight
      const tabsHeight = tabBtnHeight + tabBodyHeight
      tabs.style.height = tabsHeight + 'px'
      tabBody.style.top = tabBtnHeight + 'px'
    }
  }
}
</script>
