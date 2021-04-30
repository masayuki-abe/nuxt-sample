<template>
  <p
    v-if="btnStyle === 'modal'"
    class="btn__text"
    :class="[btnStyle, color]"
    @click="openModal"
  >
    <span>{{ linkText }}</span>
    <IcnModalOpen
      :class="[color]"
    />
  </p>
  <p
    v-else
    class="btn__text"
    :class="[btnStyle, color]"
  >
    <Nuxt-link :to="linkPath">
      <span>{{ linkText }}</span>
    </Nuxt-link>
  </p>
</template>

<script>
import IcnModalOpen from '@/components/atoms/icons/ModalOpen'

export default {
  components: {
    IcnModalOpen
  },
  props: {
    btnStyle: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    linkPath: {
      type: String,
      required: false,
      default: null
    },
    linkText: {
      type: String,
      required: false,
      default: 'More'
    }
  },
  methods: {
    openModal () {
      this.$emit('open-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  position: relative;
}
</style>
