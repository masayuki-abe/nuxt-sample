<template>
  <main>
    <section id="p-tabs-menu_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class=""
          tit-txt="Tabs Menu"
        />
        <p class="f-txt">
          あまり好きじゃない。スマホのときみづらくない？っていつも思う。<br>
          PCはタブメニューでスマホはアコーディオンとかって、Vue＋1ソースでやるとしたらどうやるんだろう……？
        </p>
      </div>
    </section><!-- /box01 -->

    <section id="p-tabs-menu_box02">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="PC・スマホともにタブ"
        />
        <p class="f-txt">
          配列処理で、展開するコンテンツの中身を自由に書けるようにしておけば良いかな、と。<br>
          なおここでは、メニューとコンテンツのコンポネントをわけて別々にしている。
        </p>
        <div class="c-tab">
          <ul class="c-tab_menu">
            <li v-for="(tab, index) in tabs" :key="tab.tabId" class="c-tab_menu--item" :class="[ activetab === (index + 1) ? 'active' : '', tab.tabClass ]" @click="activetab = (index + 1)">
              <MoleculesEtcTabsMenu
                :tab-menu-name="tab.tabName"
              />
            </li>
          </ul>
          <div class="c-tab_content">
            <div v-for="(item, index) in contents" :key="item.itemId" class="c-tab_content--block" :class="[ activetab === (index + 1) ? 'show' : '' ]">
              <div v-show="activetab === (index + 1)">
                <MoleculesEtcTabsContent
                  :tab-content-text="item.text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /box02 -->

    <section id="p-tabs-menu_box03">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="PCのみでタブ"
        />
        <p class="f-txt">
          PCではタブ表示して、スマホでは単純に縦並びに。こっちの方が文章構造的にはグッドではなかろうか。<br>
          読み込むコンポネントは上記と別。
        </p>
        <ul class="p-tabs-menu_box03-tablist">
          <li v-for="tab2 in tabs2" :key="tab2.tabId" :class="[ activetab2 === tab2.tabId ? 'active' : '', tab2.tabClass ]" class="p-tabs-menu_box03-tab" @click="changeTab(tab2.tabId)">
            <dl>
              <MoleculesEtcTabsResponsive
                :is-active="activetab2"
                :tab-id="tab2.tabId"
                :tab-name="tab2.tabName"
                :tab-tag="tab2.tabTag"
                :tab-body-tag="tab2.tabBodyTag"
                :tab-text="tab2.text"
              />
            </dl>
          </li>
        </ul>
      </div>
    </section><!-- /box03 -->

    <section id="p-tabs-menu_box04">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="TabsMenu.vue"
        />
        <p class="f-txt">
          PC・スマホ共通でタブ切り替えにする場合、メニュー部分とコンテンツ部分をわけている。<br>
          これは、メニュー部分のコンポネント。
        </p>
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/etc/TabsMenu.vue"
          blockquote-title="components/molecules/etc/TabsMenu.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="vYxgaZY"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="MoleculesEtcTabsMenu.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/vYxgaZY">
            MoleculesEtcTabsMenu.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li>なんてことはなく、メニュー部分のテキストを<code>props</code>で配列から受け取っているだけ</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box04 -->

    <section id="p-tabs-menu_box05">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="TabsContent.vue"
        />
        <p class="f-txt">
          PC・スマホ共通でタブ切り替えにする場合、メニュー部分とコンテンツ部分をわけている。<br>
          これは、コンテンツ部分のコンポネント。
        </p>
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/etc/TabsContent.vue"
          blockquote-title="components/molecules/etc/TabsContent.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="QWpdBqM"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="MoleculesEtcTabsContent.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/QWpdBqM">
            MoleculesEtcTabsContent.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li>こちらもなんてことはなく、コンテンツを<code>props</code>で配列から受け取っているだけ</li>
              <li>中身はHTMLを自由に書けるように<code>v-html</code>を採用。<code>v-html</code>はあまり推奨されていないようなので、よりより代替案を検討する必要がある</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box05 -->

    <section id="p-tabs-menu_box06">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="TabsResponsive.vue"
        />
        <p class="f-txt">
          PCのみでタブ切り替えを行う文章構造意識版のコンポネント
        </p>
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/etc/TabsResponsive.vue"
          blockquote-title="components/molecules/etc/TabsResponsive.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="YzZNjaP"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="MoleculesEtcTabsResponsive.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/YzZNjaP">
            MoleculesEtcTabsResponsive.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li>関数<sode>tabs</sode>でPC版のみコンテンツの高さを取得してタブ切り替えを実現</li>
              <li>関数<code>tabs</code>では<code>$refs</code>を採用しているため<code>mounted</code>後にしか動作しない。よりより代替案を検討する必要がある</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box06 -->

    <section id="p-tabs-menu_box07">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="TabsMenu.vue"
        />
        <p class="f-txt">
          上記コンポネントを読み込んで実際に動作させるサンプル
        </p>
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/etc/TabsResponsive.vue"
          blockquote-title="components/molecules/etc/TabsResponsive.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="abJpjKM"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="TemplatesTabsMenu"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/abJpjKM">
            TemplatesTabsMenu</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
      </div>
    </section><!-- /box07 -->

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
  data () {
    return {
      activetab: 1,
      activetab2: 1,
      tabsHeight: 0,

      tabs: [
        { tabId: '1', tabClass: 'c-tab_menu--item01-01', tabName: 'タブ01' },
        { tabId: '2', tabClass: 'c-tab_menu--item01-02', tabName: 'タブ01タブ02' },
        { tabId: '3', tabClass: 'c-tab_menu--item01-03', tabName: 'タブ01-03' }
      ],
      contents: [
        {
          itemId: '1',
          text: '<p>タブの中のテキストは何が入るかわからないから、複数行になっても見た目を整えるcssを書く。</p>' +
                '<p>ただデザインにもよると思うけれど、スマホでもタブを採用する場合、タブ自体の数は気をつけないといけない。</p>' +
                '<p>このデザインだと、タブが4つになることは想定していない</p>'
        },
        {
          itemId: '2',
          text: '<p><img src="/images/sample/tabs-menu.jpg" alt="タブメニューイメージ"></p>' +
                '<p>コンテンツ内ではv-htmlを採用しているので、<strong>自由にHTMLを書くことができる。</strong></p>' +
                'v-htmlはXSSの危険性があるが、あくまで実装側のみの話であれば<span style="color: red">そこまでクリティカルではないのでは？</span>'
        },
        {
          itemId: '3',
          text: '<p>とりあえずコピペで動かしてみた。</p>' +
                '<p>jQueryだともう少し複雑になる。Vue.js優秀だなと痛感。</p>'
        }
      ],
      tabs2: [
        {
          tabStatus: null,
          tabId: 1,
          tabClass: 'c-tab_menu--item02-01',
          tabName: 'タブ02-01',
          tabTag: 'dt',
          tabBodyTag: 'dd',
          text: '<p>タブ2のテスト</p>' +
                '<p>1つの配列の中でタブのテキストと展開コンテンツを管理。</p>' +
                '<p>要素の表示/非表示はcssで管理している。これでうまくいくのか。</p>'
        },
        {
          tabStatus: null,
          tabId: 2,
          tabClass: 'c-tab_menu--item02-02',
          tabName: 'タブ02-02',
          tabTag: 'dt',
          tabBodyTag: 'dd',
          text: '<p>変わらずv-htmlを採用しているので中のHTMLは自由</p>' +
                '<p>ただ、<strong>iframeなどは検証していないのでどうなるかわからない。</strong></p>'
        },
        {
          tabStatus: null,
          tabId: 3,
          tabClass: 'c-tab_menu--item02-03',
          tabName: 'タブ02-03',
          tabTag: 'dt',
          tabBodyTag: 'dd',
          text: '<p>タブ2のテスト3</p>'
        }
      ]
    }
  },
  methods: {
    changeTab (tabId) {
      this.activetab2 = tabId
    }
  }
}
</script>

<style lang="scss">
.c-btn_text.back{
  width: 50%;
  margin: 0 auto;
}
#p-tabs-menu{
  &_box01{
    padding-bottom: per(100, $tab);
  }
  &_box02{
    padding-bottom: per(100, $tab);
    .f-txt{
      padding-bottom: 1em;
    }
    .c-tab{
      &_menu{
        border-bottom: 2px $gray solid;

        &--item{
          @include fontSet(32, 38, 0, $tab);
          width: 28%;
          border: 2px $gray solid;
          transform: translateY(2px);
          transition: background 0.6s ease;

          &.active{
            background-color: $gray;
          }
        }
      }
      &_content{
        &--block{
          transition: background 0.6s ease;

          &-inner{
            @include fontSet(32, 48, 100, $tab);
            padding: 1em;
            border: 2px $gray solid;
            border-top: none;
          }
          &.show{
            background-color: $gray;
          }
        }
      }
    }
  }
  &_box03{
    padding-bottom: per(100, $tab);
    .f-txt{
      padding-bottom: 1em;
    }
    ul{
      list-style: none;
      border: 2px $gray solid;

      li{
        border-bottom: 2px $gray solid;
        &:last-child{
          border-bottom: none;
        }
        .c-tab-responsive_menu{
          @include fontSet(32, 38, 100, $tab);
          padding: 0.5em;
          background-color: $white;
          color: $dark;
          transition: background 0.4s ease, color 0.4s ease;
        }
        .c-tab-responsive_content--block{
          @include fontSet(32, 48, 100, $tab);
          padding: 1em;
        }
        &.active{
          .c-tab-responsive_menu{
            background-color: $black;
            color: $white;
          }
          .c-tab-responsive_content--block{
            background-color: rgba($black, 0.2);
          }
        }
      }
    }
  }
  &_box04,&_box05,&_box06,&_box07{
    padding-bottom: per(100, $tab);
    .f-txt{
      padding-bottom: 1em;
    }
  }
}

@include tab() {
  #p-tabs-menu{
    &_box02{
      .c-tab{
        &_menu{
          &--item{
            @include fontSet(24, 36, 0, $tab);
          }
        }
        &_content{
          &--block{
            &-inner{
              @include fontSet(24, 36, 100, $tab);
            }
          }
        }
      }
    }
    &_box03{
      ul{
        li{
          .c-tab-responsive_menu{
            @include fontSet(24, 36, 100, $tab);
          }
          .c-tab-responsive-content--block{
            @include fontSet(24, 36, 100, $tab);
          }
        }
      }
    }
  }
}

@include lap() {
  #p-tabs-menu{
    &_box02{
      .c-tab{
        &_menu{
          &--item{
            @include fontSet(16, 24, 0, $lap);
          }
        }
        &_content{
          &--block{
            &-inner{
              @include fontSet(16, 24, 100, $lap);
            }
          }
        }
      }
    }
    &_box03{
      ul{
        @include dflex(sa, st);
        position: relative;
        border: none;
        li{
          width: 28%;
          border-bottom: none;
          .c-tab-responsive_menu{
            @include fontSet(16, 24, 0, $lap);
            border: 2px $black solid;
            border-radius: 0.5em 0.5em 0 0;
            transform: translateY(-2px);
            transition: background 0.6s ease;
          }
          .c-tab-responsive_content--block{
            @include fontSet(16, 24, 0, $lap);
            padding: 1em;
            border: 2px $black solid;
          }
        }
      }
    }
  }
}

@include pc() {
  #p-tabs-menu{
    &_box02{
      .c-tab{
        &_menu{
          &--item{
            &:hover{
              background-color: $gray;
            }
          }
        }
      }
    }
    &_box03{
      ul{
        li{
          .c-tab-responsive_menu{
            &:hover{
              background-color: $black;
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
