<template>
  <main>
    <section id="p-accordion_box01">
      <div class="c-box">
        <h2>Accordion</h2>
        <p class="common-txt">
          というか、正確に言うとSlide Toggleになるのか。
        </p>
      </div>
    </section>

    <section id="p-accordion_box02">
      <div class="c-box">
        <h3>ベタ書きパタン</h3>
        <p class="common-txt">
          開閉ボタンのタグとテキストを指定して、展開する要素はHTMLで自由に書くパタン。<br>
          手間はあるけれど好きなように任意の場所に設置しやすい（と、思っている）。
        </p>
        <dl>
          <Accordion
            aco-title-tag="dt"
            aco-title="べたっと書く"
          >
            <dd>ここでは開閉ボタンをdt、展開要素をddに指定。この組み合わせが一番好きです。</dd>
          </Accordion>
        </dl>
        <Accordion
          aco-title-tag="h4"
          aco-title="ベタ書きだから自由"
        >
          <p>次は開閉ボタンをh4、展開要素を複数のタグで構成。</p>
          <p>たとえば画像を設置したり。class指定すればとにかく自由</p>
          <figure><img src="~/assets/img/sample/accordion.jpg" alt="アコーディオン" width="960" height="960"></figure>
        </Accordion>
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

<style lang="scss">
#p-accordion_box02{
  .c-accordion{
    margin-bottom: per(40, $tab);
    &_btn{
      @include fontSet(32, 32, 100, $tab);
      padding: 1em;
      background: $gray;
      border: 2px $black solid;
      color: $white;
      transition: border 1s ease, color 1s ease;
      .icon{
        border-right: 2px $white solid;
        border-bottom: 2px $white solid;
        transition: border 1s ease, transform 1s ease;
      }

      &.active{
        border: 2px $gray solid;
        color: $black;
        .icon{
          border-right-color: $black;
          border-bottom-color: $black;
        }
      }
    }
    &_body{
      &--inner{
        @include fontSet(32, 48, 100, $tab);
        padding: 1em;
        background-color: $black;
        color: $white;
      }
    }
  }
}
</style>
