<template>
  <div class="c-tabs-menu">
    <ul class="c-tabs-menu_btn">
      <li v-for="(tab, index) in tabBtns" :key="tab.tabName" class="tabs-btn" :class="[ activetab === (index +1 ) ? 'active' : '' ] " @click="activetab = (index + 1)">
        {{ tab.tabText }}
      </li>
    </ul>
    <ul class="c-tabs-menu_content">
      <li v-for="(item, index) in items" :key="item.id" class="c-tabs-menu_block" :class="[ activetab === (index + 1) ? 'show' : '' ]">
        <div class="c-tabs-menu_inner">
          <div v-html="item.content" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabBtns: {
      type: Array,
      default: () => []
    },
    tabitems: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activetab: 1
    }
  },
  methods: {
    console () {
      console.log(this.tabBtns)
    }
  }
}
</script>
