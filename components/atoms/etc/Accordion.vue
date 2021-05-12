<template>
  <div class="c-accordion">
    <component
      :is="acoTitleTag"
    >
      <button class="aco-btn" type="button" :class="{ 'active' : isOpen }">
        {{ acoTitle }}
      </button>
    </component>
    <div class="aco-body">
      <slot />
    </div>
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
  }
}
</script>
