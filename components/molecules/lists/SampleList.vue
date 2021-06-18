<template>
  <ul class="c-list_sample">
    <li v-for="sample in limitCount" :key="sample.id" class="c-modal" :class="modalItem.path">
      <template v-if="$window.width < 1024">
        <AtomsButtonsTextBtn
          btn-style="modal"
          :link-text="sample.name"
          color="white"
          @open-modal="openModal(sample)"
        />
        <MoleculesEtcModal
          v-if="isModalState"
          :top-position="$window.pageYOffset"
          @close-modal="$store.commit('Modal/closeModal')"
        >
          <dl>
            <dt>
              <span>{{ modalItem.name }}</span><br>
              {{ modalItem.nameJa }}
            </dt>
            <dd>
              <p class="comment f-txt">
                {{ modalItem.comment }}
              </p>
              <AtomsButtonsTextBtn
                btn-style="ghost"
                color="white"
                :link-path="modalItem.path"
                :link-text="modalItem.name"
                @click.native="$store.commit('Modal/closeModal')"
              />
            </dd>
          </dl>
        </MoleculesEtcModal>
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
            <AtomsButtonsTextBtn
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
import sampleList from 'assets/js/SampleList'

export default {
  data () {
    return {
      modalItem: ''
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.isModalState ? 'modal-on' : ''
      }
    }
  },
  computed: {
    limitCount () {
      if (this.$route.name === 'index') {
        return sampleList.slice(0, 3)
      } else {
        return sampleList
      }
    },
    isModalState () {
      return this.$store.state.Modal.modalFlag
    }
  },
  methods: {
    openModal (sample) {
      this.$store.commit('Modal/openModal')
      this.modalItem = sample
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
