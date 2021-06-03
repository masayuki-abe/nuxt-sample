<template>
  <p
    v-if="btnStyle === 'modal'"
    class="c-btn_text"
    :class="['c-btn_text--' + btnStyle, color]"
    @click="openModal"
  >
    <span>{{ linkText }}</span>
    <AtomsIconsModalOpen
      :class="[color]"
    />
  </p>
  <p
    v-else-if="btnStyle === 'outside'"
    class="c-btn_text"
    :class="['c-btn_text--' + btnStyle, color]"
  >
    <a :href="linkPath" target="_blank">
      <span>{{ linkText }}</span>
      <fa :icon="faExternalLinkAlt" />
    </a>
  </p>
  <p
    v-else-if="btnStyle === 'trash'"
    class="c-btn_text"
    :class="['c-btn_text--' + btnStyle, color]"
  >
    <span>{{ linkText }}<AtomsIconsTrashIcn /></span>
  </p>
  <p
    v-else
    class="c-btn_text"
    :class="['c-btn_text--' + btnStyle, color]"
  >
    <Nuxt-link :to="'/' + linkPath">
      <span>{{ linkText }}</span>
    </Nuxt-link>
  </p>
</template>

<script>
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default {
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
  computed: {
    faExternalLinkAlt () {
      return faExternalLinkAlt
    }
  },
  methods: {
    openModal () {
      this.$emit('open-modal')
    }
  }
}
</script>
