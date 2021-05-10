<template>
  <ul class="c-list_sample">
    <li v-for="sample in samples" :key="sample.id" class="c-modal" :class="postItem.path">
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
            <p class="comment common-txt">
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
    samples () {
      const sampleList = [
        {
          id: '1',
          path: 'hamburger-menu',
          name: 'Hamburger Menu',
          nameJa: 'ハンバーガーメニュー',
          comment: '言わずと知れた「三本線」のボタンクリックでメニューの開閉を実行。ヘッダ右上のボタンがそれ。（PC版では非表示）'
        },
        {
          id: '2',
          path: 'modal-window',
          name: 'Modal Window',
          nameJa: 'モーダルウィンドウ',
          comment: 'ウィンドウ内で、「子ウィンドウ」を展開。課題あり。どう解決するか。'
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
          background: url(@/assets/img/sample/hamburger-menu.jpg) no-repeat center center;
          background-size: cover;
        }
      }
    }
    &.modal-window{
      .c-modal{
        &_wrap{
          background: url(@/assets/img/sample/modal-window.jpg) no-repeat center center;
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
  @include dflex(c, c);
  li{
    width: 32%;
    margin: 0 2% 1em 0;
    &:nth-child(3n){
      margin: 0 0 1em 0;
    }

    .c-modal_content{
      @include dflex(c, c);

      dl{
        width: 50%;

        dt{
          @include fontSet(18, 24, 100, $tab);

          span{
            @include fontSet(16, 24, 100, $tab);
          }
        }
        dd{
          width: 90%;
          margin: 0 auto;

          .c-btn_text{
            width: 70%;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
}
</style>
