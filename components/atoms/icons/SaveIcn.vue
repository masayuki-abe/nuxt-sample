<template>
  <span><fa :icon="faStickyNote" /></span>
</template>

<script>
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    faStickyNote () {
      return faStickyNote
    }
  }
}
</script>
