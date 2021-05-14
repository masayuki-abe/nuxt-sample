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
            <li v-for="(tab,index) in tabs" :key="index" class="tabItem" :class="[ activetab === (index+1) ? 'active' : '' ]" @click="activetab=(index+1)">
              {{ tab.tabitem }}
            </li>
          </ul>

          <div class="tabContent">
            <div v-for="(item,index) in contents" :key="index" class="tabBlock" :class="[ activetab === (index+1) ? 'show' : '' ]">
              <div class="tabBlock__inner">
                <h3 class="tabBlock__title">
                  {{ item.title }}
                </h3>
                <p class="tabBlock__text">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      activetab: 1,

      tabs: [
        { tabitem: 'tab01' },
        { tabitem: 'tab02' },
        { tabitem: 'tab03' }
      ],
      contents: [
        {
          title: 'コンテンツ01',
          text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        },
        {
          title: 'コンテンツ02',
          text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        },
        {
          title: 'コンテンツ03',
          text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        }
      ]
    }
  }
}
</script>
