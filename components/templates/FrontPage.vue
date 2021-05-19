<template>
  <main>
    <section id="c-front-page_box01" class="c-box">
      <Tit
        tit-tag="h2"
        tit-class="center"
        tit-txt="Nuxt.js Sample"
      />
      <SampleLists />
      <BtnText
        btn-style="rounded"
        color="dark"
        link-path="sample"
        link-text="More"
      />
    </section><!-- /c-front-page_box01 -->
  </main>
</template>

<script>
import SampleLists from '@/components/molecules/lists/SampleList'
import BtnText from '@/components/atoms/buttons/TextBtn'
import Tit from '../atoms/titles/Tit.vue'

export default {
  components: {
    SampleLists,
    BtnText,
    Tit
  },
  data () {
    return {
      modalFlag: false
    }
  },
  methods: {
    openModal () {
      this.modalFlag = true
    },
    closeModal () {
      this.modalFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
#c-front-page{
  &_box01{
    .c-btn_text{
      width: 50%;
      margin: 0 auto;
    }
  }
}

.c-modal{
  dl{
    margin-bottom: 1em;
    padding: 1em;
    background-color: $gray;

    dt{
      font-style: italic;
    }
    dd{
      @include fontSet(40, 48, 200, $tab);
      padding-bottom: .5em;
      font-weight: bold;

      &.intro{
        @include fontSet(32, 48, 100, $tab);
        padding-bottom: 0;
        font-weight: normal;
      }
    }
  }
  p{
    padding-left: -1em;
    text-indent: 1em;
  }
}

@include tab() {
.c-modal{
  dl{
    dd{
      @include fontSet(24, 36, 200, $tab);

      &.intro{
        @include fontSet(20, 32, 100, $tab);
      }
    }
  }
}
}

@include lap() {
.c-modal{
  dl{
    dd{
      @include fontSet(18, 24, 200, $tab);

      &.intro{
        @include fontSet(16, 24, 100, $tab);
      }
    }
  }
}
}
</style>
