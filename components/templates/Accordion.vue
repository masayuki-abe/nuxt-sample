<template>
  <main>
    <section id="p-accordion_box01">
      <div class="c-box">
        <h2>Accordion</h2>
        <p class="f-txt">
          というか、正確に言うとSlide Toggleになるのか。
        </p>
      </div>
    </section>

    <section id="p-accordion_box02">
      <div class="c-box">
        <h3>ベタ書きパタン</h3>
        <p class="f-txt">
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
          <figure><img src="/images/sample/accordion.jpg" alt="アコーディオン" width="960" height="960"></figure>
        </Accordion>
      </div>
    </section>

    <section id="p-accordion_box03">
      <div class="c-box">
        <h3>配列読み込みパタン</h3>
        <p class="f-txt">
          上記と同じ仕組みで開閉ボタンのテキストと展開する内容を配列から読み込む。<br>
          見た目が決まっているシンプルな内容であればこちらの方が賢そう。
        </p>
        <ul>
          <li v-for="acoList in acoLists" :key="acoList.id" :class="acoList.id">
            <dl>
              <Accordion
                aco-title-tag="dt"
                :aco-title="acoList.acoArrayTitle"
                aco-type="type2"
                :aco-index="acoList.index"
              >
                <dd>{{ acoList.acoArrayBody }}</dd>
              </Accordion>
            </dl>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import Accordion from '@/components/molecules/etc/Accordion'

export default {
  components: {
    Accordion
  },
  computed: {
    acoLists () {
      const acoArrayList = [
        {
          id: 'aco1',
          acoArrayTitle: '配列から読み込む',
          acoArrayBody: '自由記述の代わりに配列から読み込む。マークアップはul>liでliを繰り返している。'
        },
        {
          id: 'aco2',
          acoArrayTitle: 'ただし……？',
          acoArrayBody: '配列で型にはめるからある程度制限されてしまう？　展開するコンテンツ内で自由に記述するにはどうすればいいんだろう。'
        },
        {
          id: 'aco3',
          acoArrayTitle: 'ちなみに',
          acoArrayBody: 'アコーディオンのコンポネントでは機能のみを設定しているので、見た目は読み込むページで自由に変えられる。'
        }
      ]
      return acoArrayList
    }
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
      border: 2px $darkGray solid;
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

#p-accordion_box03{
  ul{
    list-style: none;
    border: 2px $darkGray solid;
    border-radius: 10px;

    li{
      .c-accordion{
        &_btn{
          @include fontSet(32, 32, 100, $tab);
          padding: 1em;
          color: $white;
          transition: border 1s ease, color 1s ease;
          .icon{
            border-right: 2px $darkGray solid;
            border-bottom: 2px $darkGray solid;
            transition: border 1s ease, transform 1s ease;
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
      &.aco1{
        .c-accordion{
          &_btn{
            border-bottom: 2px red solid;
            color: red;
          }
          &_body{
            &--inner{
              background-color: red;
            }
          }
        }
      }
      &.aco2{
        .c-accordion{
          &_btn{
            border-bottom: 2px green solid;
            color: green;
          }
          &_body{
            &--inner{
              background-color: green;
            }
          }
        }
      }
      &.aco3{
        .c-accordion{
          &_btn{
            color: blue;
          }
          &_body{
            &--inner{
              background-color: blue;
              border-radius: 0 0 10px 10px;
            }
          }
        }
      }
    }
  }
}
</style>
