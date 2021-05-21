<template>
  <main>
    <section id="p-hamburger-menu_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class=""
          tit-txt="Hamburger Menu"
        />
        <p class="f-txt">
          ハンバーガーメニューのサンプル。ヘッダーにあるハンバーガーボタンをクリック（タップ）することで動作確認できる。<br>
          ※PC版ではハンバーガーボタンを非表示にしている。
        </p>
      </div>
    </section><!-- /box01 -->

    <section id="p-hamburger-menu_box02">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="HtmlHeader.vue"
        />
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/organisms/HtmlHeader.vue"
          blockquote-title="components/organisms/HtmlHeader.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="OJpWvOb"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="HtmlHeader.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/OJpWvOb">
            HtmlHeader.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li><code>AtomsButtonsHamburger</code>でハンバーガーボタンをインポート</li>
              <li><code>AtomsButtonsHamburger</code>でクリック判定を<code>$emit</code>で受け取る</li>
              <li>
                <code>MoleculesListsNaviList</code>の表示条件を、<br>
                ・<code>gnaviOn</code>が<code>true</code><br>
                ・ウィンドウサイズが1024px未満<br>
                の2つで判定
              </li>
              <li>しゅるしゅる動くメニューはNuxt.jsの<code>transition</code>で制御</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box02 -->

    <section id="p-hamburger-menu_box03">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Hamburger.vue"
        />
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/atoms/buttons/Hamburger.vue"
          blockquote-title="components/atoms/buttons/Hamburger.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="yLMgKQq"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="AtomsButtonsHamburger.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/yLMgKQq">
            AtomsButtonsHamburger.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li><code>$emit</code>でクリック判定を親に渡す</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box03 -->

    <section id="p-hamburger-menu_box04">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="NaviList.vue"
        />
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/lists/NaviList.vue"
          blockquote-title="components/molecules/lists/NaviList.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="dyvNmwo"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="MoleculesListsNaviList.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/dyvNmwo">
            MoleculesListsNaviList.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li><code>&lt;Nuxt-link&gt;</code>に<code>@click.native</code>でクリック判定を<code>$emit</code>する</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box04 -->

    <AtomsButtonsTextBtn
      btn-style="rounded back"
      color="dark"
      link-path=""
      link-text="Back to Front"
    />
  </main>
</template>

<style lang="scss" scoped>
.c-box{
  padding-bottom: per(60, $tab);
}
.c-btn_text{
  width: 50%;
  margin: 0 auto;
}
#p-hamburger-menu{
  &_box01{
    .f-txt{
      padding-bottom: 1em;
    }
  }
}
</style>
