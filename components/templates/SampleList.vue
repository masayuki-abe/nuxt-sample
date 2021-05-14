<template>
  <main>
    <section id="p-sample-list_box01">
      <div class="c-box">
        <h2>Sample List</h2>
        <SampleLists />
      </div>
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
@include pc() {
  #p-sample-list_box01{
    width: per(1000, $pc);
    margin: 0 auto;
  }
}
</style>
