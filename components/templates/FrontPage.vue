<template>
  <main>
    <p>FrontPage</p>

    <div class="modal-window">
      <button @click="openModal">
        Open the 'Modal Window'
      </button>
      <Modal v-if="modalFlag">
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
        <button @click="closeModal">
          Close
        </button>
      </Modal>
    </div><!--/ modal window-->
  </main>
</template>

<script>
import Modal from '@/components/atoms/etc/Modal'
export default {
  components: {
    Modal
  },
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
