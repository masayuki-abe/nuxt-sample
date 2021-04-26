<template>
  <div>
    <HtmlHeader />
    <div id="wrap">
      <Nuxt />
    </div>
    <HtmlFooter />
  </div>
</template>

<script>
import HtmlHeader from '@/components/organisms/HtmlHeader.vue'
import HtmlFooter from '@/components/organisms/HtmlFooter.vue'

export default {
  components: {
    HtmlHeader,
    HtmlFooter
  }
}
</script>
