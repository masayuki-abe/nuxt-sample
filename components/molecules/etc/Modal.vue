<template>
  <transition name="modal" appear>
    <div
      class="c-modal_base"
      :style="modalTopPosition"
      @click.self="closeModal"
    >
      <div class="c-modal_wrap">
        <div class="c-modal_content">
          <slot />
        </div>
        <AtomsIconsTimeIcn
          @click.native="closeModal"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    topPosition: {
      type: Number,
      default: 0
    }
  },
  computed: {
    modalTopPosition () {
      return {
        '--top': this.topPosition + 'px'
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss">
.c-modal{
  &_base{
    position: absolute;
    left: 0;
    top: var(--top);
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba($dark, 0.7);
  }

  &_wrap{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1100;
    width: 90%;
    height: 80%;
    transform: translate(-50%, -50%);

    .icon.time{
      right: 0;
      top: -1.5em;
      width: 2em;
      height: 2em;
    }
  }

  &_content{
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 1em;
    background-color: rgba($white, 0.9);
    border: 2px $black solid;
  }
}

//transition
.modal{
  &-enter-active,
  &-leave-active{
    transition: opacity 0.6s ease;

    .c-modal_content{
      transition: opacity 0.4s ease, transform 0.8s ease;
    }
  }
  &-leave-active{
    transition: opacity 0.6s ease 0.1s;
  }

  &-enter,
  &-leave-to{
    opacity: 0;

    .c-modal_content{
      opacity: 0;
      transform: translateY(-20px);
    }
  }
}
</style>
