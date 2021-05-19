<template>
  <ul class="c-list_sample">
    <li v-for="sample in limitCount" :key="sample.id" class="c-modal" :class="postItem.path">
      <template v-if="$window.width < 1024">
        <BtnText
          btn-style="modal"
          :link-text="sample.name"
          color="white"
          @open-modal="openModal(sample)"
        />
        <Modal
          v-if="modalFlag"
          @close-modal="closeModal"
        >
          <dl>
            <dt>
              <span>{{ postItem.name }}</span><br>
              {{ postItem.nameJa }}
            </dt>
            <dd>
              <p class="comment f-txt">
                {{ postItem.comment }}
              </p>
              <BtnText
                btn-style="ghost"
                color="white"
                :link-path="postItem.path"
                :link-text="postItem.name"
              />
            </dd>
          </dl>
        </Modal>
      </template>
      <template v-else>
        <figure><img :src="sample.img" width="960" height="960"></figure>
        <dl>
          <dt>
            <span>{{ sample.name }}</span><br>
            {{ sample.nameJa }}
          </dt>
          <dd>
            <p class="comment f-txt">
              {{ sample.comment }}
            </p>
            <BtnText
              btn-style="ghost"
              color="white"
              :link-path="sample.path"
              :link-text="sample.name"
            />
          </dd>
        </dl>
      </template>
    </li>
  </ul>
</template>

<script>
import BtnText from '@/components/atoms/buttons/TextBtn'
import Modal from '@/components/atoms/etc/Modal'

export default {
  components: {
    BtnText,
    Modal
  },
  data () {
    return {
      modalFlag: false,
      postItem: ''
    }
  },
  computed: {
    limitCount () {
      if (this.$route.name === 'index') {
        return this.samples.slice(0, 3)
      } else {
        return this.samples
      }
    },
    samples () {
      const sampleList = [
        {
          id: '1',
          path: 'hamburger-menu',
          img: '/images/sample/hamburger-menu.jpg',
          name: 'Hamburger Menu',
          nameJa: 'ハンバーガーメニュー',
          comment: '言わずと知れた「三本線」のボタンクリックでメニューの開閉を実行。ヘッダ右上のボタンがそれ。（PC版では非表示）'
        },
        {
          id: '2',
          path: 'modal-window',
          img: '/images/sample/modal-window.jpg',
          name: 'Modal Window',
          nameJa: 'モーダルウィンドウ',
          comment: 'ウィンドウ内で、「子ウィンドウ」を展開。課題あり。どう解決するか。'
        },
        {
          id: '3',
          path: 'accordion',
          img: '/images/sample/accordion.jpg',
          name: 'Accordion',
          nameJa: 'アコーディオン',
          comment: 'ボタンクリックで下に展開するアコーディオンメニュー（トグルメニュー）。ベタ書きと配列処理の2パタン'
        },
        {
          id: '4',
          path: 'tabs-menu',
          img: '/images/sample/tabs-menu.jpg',
          name: 'Tabs Menu',
          nameJa: 'タブメニュー',
          comment: 'タブ切り替え機能。PC・スマホともにタブメニューと、PCではタブ、スマホではアコーディオンの2パタン。どちらも配列処理'
        }
      ]
      return sampleList
    }
  },
  methods: {
    openModal (sample) {
      this.modalFlag = true
      this.postItem = sample
    },
    closeModal () {
      this.modalFlag = false
    }
  }
}
</script>

<style lang="scss">
.c-list_sample{
  li{
    &.hamburger-menu{
      .c-modal{
        &_wrap{
          background: url(/images/sample/hamburger-menu.jpg) no-repeat center center;
          background-size: cover;
        }
      }
    }
    &.modal-window{
      .c-modal{
        &_wrap{
          background: url(/images/sample/modal-window.jpg) no-repeat center center;
          background-size: cover;
        }
      }
    }
    &.accordion{
      .c-modal{
        &_wrap{
          background: url(/images/sample/accordion.jpg) no-repeat center center;
          background-size: cover;
        }
      }
    }
    &.tabs-menu{
      .c-modal{
        &_wrap{
          background: url(/images/sample/tabs-menu.jpg) no-repeat center center;
          background-size: cover;
        }
      }
    }
    .c-modal_content{
      background-color: rgba($dark, 0.4);

      dl{
        dt{
          @include fontSet(38, 42, 100, $tab);
          margin-bottom: 1em;
          padding-bottom: 0.5em;
          border-bottom: 1px $white solid;
          color: $white;

          span{
            @include dis(inline-block);
            @include fontSet(32, 32, 100, $tab);
            padding-bottom: 0.5em;
            font-style: italic;
          }
        }
        dd{
          .comment{
            padding-bottom: 1em;
            color: $white;
          }
        }
      }
    }
  }
}

@include tab() {
.c-list_sample{
  li{
    .c-modal_content{
      dl{
        dt{
          @include fontSet(24, 36, 100, $tab);

          span{
            @include fontSet(20, 20, 100, $tab);
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
}

@include lap() {
.c-list_sample{
  @include dflex(c, fs);
  li{
    @include dflex(fs, fs);
    flex-direction: column;
    width: 280px;
    margin: 0 40px 0 0;
    &:nth-child(3n), &:last-child{
      margin: 0;
    }

    figure{
      font-size: 0;
      line-height: 0;

      img{
        width: 85%;
        height: 160px;
        object-fit: cover;
      }
    }

    dl{
      width: 90%;
      margin-left: auto;
      padding: 5px 15px 15px;
      background-color: rgba($dark, 0.7);
      color: $white;
      transform: translateY(-40px);

        dt{
          @include fontSet(18, 24, 100, $tab);
          margin-bottom: 0.5em;
          padding: 0 0.2em 0.5em;
          border-bottom: 1px $white solid;
          font-weight: 700;

          span{
            @include fontSet(12, 12, 100, $tab);
            font-weight: 400;
          }
        }

        dd{
          .comment{
            padding-bottom: 1em;
          }
          .c-btn_text{
            width: 90%;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
