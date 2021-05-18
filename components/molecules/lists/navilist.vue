<template>
  <ul class="l-navilist">
    <li v-for="navilist in navilists" :key="navilist.path" :class="navilist.path">
      <Nuxt-link :to="navilist.path">
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
        },
        {
          path: '/strage',
          name: 'Strage'
        }
      ]
      return navi
    }
  }
}
</script>
