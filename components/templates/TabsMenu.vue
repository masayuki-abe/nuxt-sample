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
          配列処理で、展開するコンテンツの中身を自由に書けるようにしておけば良いかな、と。
        </p>
        <div id="tab">
          <ul class="tabMenu">
            <li v-for="(tab,index) in tabs" :key="index" class="tabItem" :class="[ activetab === (index + 1) ? 'active' : '', tab.tabClass ]" @click="activetab=(index+1)">
              <TabsMenu
                :tab-menu-class="tab.tabClass"
                :tab-menu-name="tab.tabName"
              />
            </li>
          </ul>

          <div class="tabContent">
            <div v-for="(item,index) in contents" :key="index" class="tabBlock" :class="[ activetab === (index + s1) ? 'show' : '' ]">
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
        { tabClass: 'tab01', tabName: 'タブ01' },
        { tabClass: 'tab02', tabName: 'タブ02タブ02' },
        { tabClass: 'tab03', tabName: 'タブ03' }
      ],
      contents: [
        {
          text: '<p>ここに<strong>コンテンツ</strong>をいれる</p>'
        },
        {
          text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        },
        {
          text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        }
      ]
    }
  }
}
</script>
