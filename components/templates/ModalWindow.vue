<template>
  <main>
    <section id="p-modal-window_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class=""
          tit-txt="Modal Window"
        />
        <p class="f-txt">
          モーダルウィンドウのサンプル。下記のボタンをクリック（タップ）することで動作確認できる。
        </p>
        <div class="p-modal-window_box01--modal-window">
          <AtomsButtonsTextBtn
            btn-style="modal"
            link-text="Open the 'Modal Window'."
            color="white"
            @open-modal="openModal"
          />
          <MoleculesEtcModal
            v-if="modalFlag"
            @close-modal="closeModal"
          >
            <dl>
              <dt>夢野久作</dt>
              <dd>ドグラ・マグラ</dd>
              <dd class="intro">
                胎児よ<br>
                胎児よ<br>
                何故躍る<br>
                母親の心がわかって<br>
                おそろしいのか
              </dd>
            </dl>
            <p>…………ブウウ――――――ンンン――――――ンンンン………………。</p>
            <p>私がウスウスと眼を覚ました時、こうした蜜蜂の唸るような音は、まだ、その弾力の深い余韻を、私の耳の穴の中にハッキリと引き残していた。</p>
            <p>それをジッと聞いているうちに……今は真夜中だな……と直覚した。そうしてどこか近くでボンボン時計が鳴っているんだな……と思い思い、又もウトウトしているうちに、その蜜蜂のうなりのような余韻は、いつとなく次々に消え薄れて行って、そこいら中がヒッソリと静まり返ってしまった。</p>
            <p>私はフッと眼を開いた。</p>
            <p>かなり高い、白ペンキ塗の天井裏から、薄白い塵埃に蔽われた裸の電球がタッタ一つブラ下がっている。その赤黄色く光る硝子球の横腹に、大きな蠅が一匹とまっていて、死んだように凝然としている。その真下の固い、冷めたい人造石の床の上に、私は大の字型に長くなって寝ているようである。</p>
            <p>……おかしいな…………。</p>
            <p>私は大の字型に凝然としたまま、瞼を一パイに見開いた。そうして眼の球だけをグルリグルリと上下左右に廻転さしてみた。</p>
            <p>青黒い混凝土の壁で囲まれた二間四方ばかりの部屋である。</p>
            <p>その三方の壁に、黒い鉄格子と、鉄網で二重に張り詰めた、大きな縦長い磨硝子の窓が一つ宛、都合三つ取付けられている、トテも要心堅固に構えた部屋の感じである。</p>
            <p>窓の無い側の壁の附け根には、やはり岩乗な鉄の寝台が一個、入口の方向を枕にして横たえてあるが、その上の真白な寝具が、キチンと敷き展べたままになっているところを見ると、まだ誰も寝たことがないらしい。</p>
            <p>……おかしいぞ…………。</p>
          </MoleculesEtcModal>
        </div><!--/ modal window-->
      </div>
    </section><!-- /box01 -->

    <section id="p-modal-window_box02">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="TextBtn.vue"
        />
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/atoms/buttons/TextBtn.vue"
          blockquote-title="components/atoms/buttons/TextBtn.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="PopWeZJ"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="AtomsButtonsTextBtn.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/PopWeZJ">
            AtomsButtonsTextBtn.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li>テキスト処理するボタンコンポネント内で条件分岐</li>
              <li><code>props</code>された<code>btnStyle</code>が<code>modal</code>だったらモーダルウィンドウ用のボタンを表示</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box02 -->

    <section id="p-modal-window_box03">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="Modal.vue"
        />
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/molecules/etc/Modal.vue"
          blockquote-title="components/molecules/etc/Modal.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="RwpKyoV"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="MoleculesEtcModal.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/RwpKyoV">
            MoleculesEtcModal.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        <dl class="c-list_point f-txt">
          <dt>ポイント</dt>
          <dd>
            <ul>
              <li>展開するモーダルウィンドウ内は自由に記述できるよう<code>&lt;slot /&gt;</code>を設定</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section><!-- /box03 -->

    <section id="p-modal-window_box04">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h3"
          tit-class="middle"
          tit-txt="ModalWindow.vue"
        />
        <p class="f-txt">
          上記2つのコンポネントを読み込んで実際に動作させるサンプル
        </p>
        <AtomsEtcBlockQuote
          blockquote-cite="https://github.com/masayuki-abe/nuxt-sample/blob/master/components/templates/ModalWindow.vue"
          blockquote-title="components/templates/ModalWindow.vue"
        />
        <p
          class="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="js"
          data-user="masayuki-abe"
          data-slug-hash="KKWaRrj"
          style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="TemplatesModalWindow.vue"
        >
          <span>See the Pen <a href="https://codepen.io/masayuki-abe/pen/KKWaRrj">
            TemplatesModalWindow.vue</a> by masayuki abe (<a href="https://codepen.io/masayuki-abe">@masayuki-abe</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
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
.c-box{
  padding-bottom: per(60, $tab);
}
.c-btn_text.back{
  width: 50%;
  margin: 0 auto;
}
.f-txt{
  padding-bottom: 1em;
}
.p-modal-window_box01--modal-window{
  @include fontSet(32, 48, 100, $tab);
  width: 90%;
  margin: 0 auto;
  .c-btn_text{
    @include fontSet(32, 32, 100, $tab);
    padding: .5em 2.5em .5em 1em;
    background-color: $darkGray;
    border-radius: 10px;
    color: $white;
    .icon{
      border: 2px $white solid;
    }
  }
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
.p-modal-window_box01--modal-window{
  @include fontSet(20, 36, 100, $tab);
  .c-btn_text{
    @include fontSet(20, 20, 100, $tab);
  }
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
.p-modal-window_box01--modal-window{
  @include fontSet(16, 24, 100, $tab);
  .c-btn_text{
    @include fontSet(16, 16, 100, $tab);
  }
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
