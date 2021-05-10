<template>
  <main>
    <section id="p-sample-list_box01" class="c-box">
      <h2>Sample List</h2>
      <SampleLists />
    </section>
  </main>
</template>

<script>
import SampleLists from '@/components/molecules/lists/SampleList'

export default {
  components: {
    SampleLists
  }
}
</script>

<style lang="scss" scoped>
#p-sample-list_box01{
  h2{
    padding-bottom: 1em;
    @include ta(center);
  }
}
</style>
