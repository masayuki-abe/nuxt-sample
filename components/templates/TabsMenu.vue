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
        <h3>配列処理</h3>
        <p class="common-txt">
          配列処理で、展開するコンテンツの中身を自由に書けるようにしておけば良いかな、と。<br>
          なおここでは、メニューとコンテンツのコンポネントをわけて別々にしている。
        </p>
        <div id="c-tab">
          <ul class="c-tab_menu">
            <li v-for="(tab, index) in tabs" :key="index" class="c-tab_menu--item" :class="[ activetab === (index + 1) ? 'active' : '', tab.tabClass ]" @click="activetab=(index + 1)">
              <TabsMenu
                :tab-menu-class="tab.tabClass"
                :tab-menu-name="tab.tabName"
              />
            </li>
          </ul>

          <div class="c-tab_content">
            <div v-for="(item, index) in contents" :key="index" class="c-tab_content--block" :class="[ activetab === (index + 1) ? 'show' : '' ]">
              <TabsContent
                :tab-content-text="item.text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TabsMenu from '@/components/molecules/etc/TabsMenu'
import TabsContent from '@/components/molecules/etc/TabsContent'

export default {
  components: {
    TabsMenu,
    TabsContent
  },
  data () {
    return {
      activetab: 1,

      tabs: [
        { tabClass: 'c-tab_menu--item01', tabName: 'タブ01' },
        { tabClass: 'c-tab_menu--item02', tabName: 'タブ02タブ02' },
        { tabClass: 'c-tab_menu--item03', tabName: 'タブ03' }
      ],
      contents: [
        {
          text: '<p>ここに<strong>コンテンツ</strong>をいれる</p>'
        },
        {
          text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        },
        {
          text: '<p><img src="/images/sample/tabs-menu.jpg" alt="タブメニューイメージ"></p>' +
                '<p>ここにテキストが入ります。</p>'
        }
      ]
    }
  }
}
</script>
