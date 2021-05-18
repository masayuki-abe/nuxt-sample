<template>
  <main>
    <section id="p-tabs-menu_box01">
      <div class="c-box">
        <h2>Tabs Menu</h2>
        <p class="common-txt">
          あまり好きじゃない。スマホのときみづらくない？っていつも思う。<br>
          PCはタブメニューでスマホはアコーディオンとかって、Vue＋1ソースでやるとしたらどうやるんだろう……？
        </p>
      </div>
    </section>

    <section id="p-tabs-menu_box02">
      <div class="c-box">
        <h3>PC・スマホともにタブ</h3>
        <p class="common-txt">
          配列処理で、展開するコンテンツの中身を自由に書けるようにしておけば良いかな、と。<br>
          なおここでは、メニューとコンテンツのコンポネントをわけて別々にしている。
        </p>
        <div class="c-tab">
          <ul class="c-tab_menu">
            <li v-for="(tab, index) in tabs" :key="tab.tabId" class="c-tab_menu--item" :class="[ activetab === (index + 1) ? 'active' : '', tab.tabClass ]" @click="activetab = (index + 1)">
              <TabsMenu
                :tab-menu-class="tab.tabClass"
                :tab-menu-name="tab.tabName"
              />
            </li>
          </ul>
          <div class="c-tab_content">
            <div v-for="(item, index) in contents" :key="item.itemId" class="c-tab_content--block" :class="[ activetab === (index + 1) ? 'show' : '' ]">
              <template v-if="activetab === (index + 1)">
                <TabsContent
                  :tab-content-text="item.text"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="p-tabs-menu_box03">
      <div class="c-box">
        <h3>PCでのみタブ</h3>
        <p class="common-txt">
          PCではタブ表示して、スマホでは単純に縦並びに。こっちの方が文章構造的にはグッドではなかろうか。<br>
          読み込むコンポネントは上記と別。
        </p>
        <ul class="p-tabs-menu_box03-tablist">
          <li v-for="tab2 in tabs2" :key="tab2.tabId" :class="[ activetab2 === tab2.tabId ? 'active' : '', tab2.tabClass ]" class="p-tabs-menu_box03-tab" @click="changeTab(tab2.tabId)">
            <dl>
              <TabsResponsive
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
    </section>
  </main>
</template>

<script>
import TabsMenu from '@/components/molecules/etc/TabsMenu'
import TabsContent from '@/components/molecules/etc/TabsContent'
import TabsResponsive from '@/components/molecules/etc/TabsResposive'

export default {
  components: {
    TabsMenu,
    TabsContent,
    TabsResponsive
  },
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
#p-tabs-menu{
  &_box02{
    .c-tab{
      &_menu{
        border-bottom: 2px $gray solid;

        &--item{
          @include fontSet(32, 38, 0, $tab);
          width: 28%;
          border: 2px $gray solid;
          transform: translateY(2px);

          &.active{
            border-bottom: 2px $white solid;
          }
        }
      }
      &_content{
        &--block{
          &-inner{
            @include fontSet(32, 48, 100, $tab);
            padding: 1em;
            border: 2px $gray solid;
            border-top: none;
          }
        }
      }
    }
  }
}

@include lap() {
  #p-tabs-menu{
    &_box03{
      ul{
        @include dflex(sa, st);
        position: relative;
        list-style: none;

        li{
          width: 28%;
        }
      }
    }
  }
}
</style>
