<template>
  <main>
    <section id="p-accordion_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class=""
          tit-txt="Accordion"
        />
        <p class="f-txt">
          というか、正確に言うとSlide Toggleになるのか。
        </p>
      </div>
    </section><!-- /box01 -->

    <section id="p-accordion_box02">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="ベタ書きパタン"
        />
        <p class="f-txt">
          開閉ボタンのタグとテキストを指定して、展開する要素はHTMLで自由に書くパタン。<br>
          手間はあるけれど好きなように任意の場所に設置しやすい（と、思っている）。
        </p>
        <dl>
          <MoleculesEtcAccordion
            aco-title-tag="dt"
            aco-title="べたっと書く"
          >
            <dd>ここでは開閉ボタンをdt、展開要素をddに指定。この組み合わせが一番好きです。</dd>
          </MoleculesEtcAccordion>
        </dl>
        <MoleculesEtcAccordion
          aco-title-tag="h4"
          aco-title="ベタ書きだから自由"
        >
          <p>次は開閉ボタンをh4、展開要素を複数のタグで構成。</p>
          <p>たとえば画像を設置したり。class指定すればとにかく自由</p>
          <figure><img src="/images/sample/accordion.jpg" alt="アコーディオン" width="960" height="960"></figure>
        </MoleculesEtcAccordion>
      </div>
    </section><!-- /box02 -->

    <section id="p-accordion_box03">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="配列読み込みパタン"
        />
        <p class="f-txt">
          上記と同じ仕組みで開閉ボタンのテキストと展開する内容を配列から読み込む。<br>
          見た目が決まっているシンプルな内容であればこちらの方が賢そう。
        </p>
        <ul>
          <li v-for="acoList in acoLists" :key="acoList.id" :class="acoList.id">
            <dl>
              <MoleculesEtcAccordion
                aco-title-tag="dt"
                :aco-title="acoList.acoArrayTitle"
                aco-type="type2"
                :aco-index="acoList.index"
              >
                <dd>{{ acoList.acoArrayBody }}</dd>
              </MoleculesEtcAccordion>
            </dl>
          </li>
        </ul>
      </div>
    </section><!-- /box03 -->

    <section id="p-accordion_box04">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Accordion.vue"
        />
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/etc/Accordion.vue"
          blockquote-title="components/molecules/etc/Accordion.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="ExWZRGQ"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="MoleculesEtcAccordion.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/ExWZRGQ">
            MoleculesEtcAccordion.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li><code>&lt;component :is="hoge"&gt;</code>で<code>props</code>されたタグで括るようにする</li>
              <li><code>props</code>された<code>acoType</code>が<code>type2</code>だったら配列読み込みパタンになる</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box04 -->

    <section id="p-accordion_box05">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Accordion.vue"
        />
        <p class="f-txt">
          上記コンポネントを読み込んで実際に動作させるサンプル
        </p>
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/templates/Accordion.vue"
          blockquote-title="components/templates/Accordion.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="QWpdxRK"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="TemplatesAccordion.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/QWpdxRK">
            TemplatesAccordion.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
      </div>
    </section><!-- /box05 -->

    <AtomsButtonsTextBtn
      btn-style="rounded back"
      color="dark"
      link-path=""
      link-text="Back to Front"
    />
  </main>
</template>

<script>
export default {
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
.c-btn_text.back{
  width: 50%;
  margin: 0 auto;
}
#p-accordion{
  &_box01{
    padding-bottom: per(100, $tab);
  }
  &_box04{
    padding-bottom: per(100, $tab);
  }
}

#p-accordion_box02{
  padding-bottom: per(100, $tab);
  .f-txt{
    padding-bottom: 1em;
  }
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
#p-accordion_box05{
  padding-bottom: per(100, $tab);
  .f-txt{
    padding-bottom: 1em;
  }
}
@include tab(){
  #p-accordion_box02{
    .c-accordion{
      &_btn{
        @include fontSet(24, 24, 100, $tab);
      }
      &_body{
        &--inner{
          @include fontSet(24, 36, 100, $tab);
        }
      }
    }
  }
}
@include lap() {
  #p-accordion_box02{
    .c-accordion{
      &_btn{
        @include fontSet(16, 16, 100, $lap);
      }
      &_body{
        &--inner{
          @include fontSet(16, 24, 100, $lap);
        }
      }
    }
  }
}

#p-accordion_box03{
  padding-bottom: per(100, $tab);
  .f-txt{
    padding-bottom: 1em;
  }
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
@include tab() {
  #p-accordion_box03{
    ul{
      li{
        .c-accordion{
          &_btn{
            @include fontSet(24, 24, 100, $tab);
          }
          &_body{
            &--inner{
              @include fontSet(24, 36, 100, $tab);
            }
          }
        }
      }
    }
  }
}
@include lap() {
  #p-accordion_box03{
    ul{
      li{
        .c-accordion{
          &_btn{
            @include fontSet(16, 16, 100, $lap);
          }
          &_body{
            &--inner{
              @include fontSet(16, 24, 100, $lap);
            }
          }
        }
      }
    }
  }
}
</style>
