<template>
  <span><fa :icon="faEdit" /></span>
</template>

<script>
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    faEdit () {
      return faEdit
    }
  }
}
</script>
