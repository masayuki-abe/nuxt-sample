<template>
  <span><fa :icon="faTrashAlt" /></span>
</template>

<script>
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    faTrashAlt () {
      return faTrashAlt
    }
  }
}
</script>
