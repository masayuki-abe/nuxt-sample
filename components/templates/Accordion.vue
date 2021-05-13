<template>
  <main>
    <section id="c-accordion_box01">
      <div class="c-box">
        <dl>
          <Accordion
            aco-title-tag="dt"
            aco-title="title1"
          >
            <dd>test1</dd>
          </Accordion>
          <Accordion
            aco-title-tag="dt"
            aco-title="title2"
          >
            <dd>test2</dd>
          </Accordion>
        </dl>
      </div>
    </section>
  </main>
</template>

<script>
import Accordion from '@/components/molecules/etc/Accordion'

export default {
  components: {
    Accordion
  }
}
</script>
