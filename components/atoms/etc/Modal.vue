<template>
  <transition name="modal" appear>
    <div
      class="modal__base"
      @click="closeModal"
    >
      <div class="modal__wrap">
        <div class="modal__content">
          <slot />
        </div>
        <IcnTime />
      </div>
    </div>
  </transition>
</template>

<script>
import IcnTime from '@/components/atoms/icons/TimeIcn'

export default {
  components: {
    IcnTime
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss">
.modal{
  &__base{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba($dark, 0.7);
  }

  &__wrap{
    position: absolute;
    left: 50%;
    top: 50%;
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

  &__content{
    @include fontSet(32, 48, 100, $tab);

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

    .modal__content{
      transition: opacity 0.4s ease, transform 0.8s ease;
    }
  }
  &-leave-active{
    transition: opacity 0.6s ease 0.1s;
  }

  &-enter,
  &-leave-to{
    opacity: 0;

    .modal__content{
      opacity: 0;
      transform: translateY(-20px);
    }
  }
}
</style>
