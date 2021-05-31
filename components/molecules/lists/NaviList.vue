<template>
  <ul class="l-navilist">
    <li v-for="navilist in navilists" :key="navilist.path">
      <Nuxt-link :to="navilist.path" @click.native="naviLinkSp">
        {{ navilist.name }}
      </Nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    navilists () {
      const navi = [
        {
          path: '/',
          name: 'Home'
        },
        {
          path: '/sample',
          name: 'Sample'
        },
        {
          path: '/api',
          name: 'Api'
        }
      ]
      return navi
    }
  },
  methods: {
    naviLinkSp () {
      this.$emit('naviLinkSp')
    }
  }
}
</script>
