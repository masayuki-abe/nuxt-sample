<template>
  <main>
    <section id="sample-list__box01" class="common-box">
      <h2>Sample List</h2>
      <p v-for="(samples, index) in sampleLists" :key="samples.id" class="common-txt">
        {{samples.name}}
      </p>
    </section>
  </main>
</template>

<script>
import sampleLists from '@/assets/js/sampleList.js'

export default {
  components: {
    sampleLists
  }
}
</script>
