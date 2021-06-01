<template>
  <main>
    <section id="c-front-page_box01" class="c-box">
      <AtomsTitlesTit
        tit-tag="h2"
        tit-class="center"
        tit-txt="Nuxt.js Sample"
      />
      <MoleculesListsSampleList />
      <AtomsButtonsTextBtn
        btn-style="rounded"
        color="dark"
        link-path="sample"
        link-text="More"
      />
    </section><!-- /c-front-page_box01 -->

    <section id="c-front-page_box02" class="c-box">
      <div class="c-front-page_box02--inner">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class="center"
          tit-txt="Api"
        />
        <p class="f-txt">
          GoogleBooksAPIを利用してISBNコード検索、感想をローカルストレージに保存する。
        </p>
        <AtomsButtonsTextBtn
          btn-style="rounded"
          color="dark"
          link-path="api"
          link-text="More"
        />
      </div>
    </section><!-- /c-front-page_box02 -->
  </main>
</template>

<script>
export default {
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
    padding-bottom: per(100, $tab);
    .c-btn_text{
      width: 50%;
      margin: 0 auto;
    }
  }
  &_box02{
    margin-bottom: per(50, $tab);
    background: url(/images/sample/api.jpg) no-repeat center center;
    background-size: cover;
    .c-front-page_box02--inner{
      padding: per(60, $tab) per(40, $tab);
      background-color: rgba($darkGray, .7);
    }
    .c-title{
      color: $white;
    }
    .f-txt{
      @include ta(center);
      padding-bottom: 1em;
      color: $white;
    }
  }
  &_box03{
    margin-bottom: per(100, $tab);
    padding: per(40, $tab);
    background-color: $darkGray;
    .c-title{
      color: $white;
    }
    .f-txt{
      @include ta(center);
      color: $gray;
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
#c-front-page{
  &_box02{
    .c-btn_text{
      width: 50%;
      margin: 0 auto;
    }
  }
}

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
