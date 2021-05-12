<template>
  <main>
    <section id="c-accordion_box01">
      <div class="c-box">
        <dl>
          <Accordion
            aco-title-tag="dt"
            aco-title="アコーディオンタイトル"
          >
            <dd>test</dd>
          </Accordion>
        </dl>
      </div>
    </section>
  </main>
</template>

<script>
import Accordion from '@/components/atoms/etc/Accordion'

export default {
  components: {
    Accordion
  }
}
</script>
