<template>
  <transition name="modal">
    <div class="modal__base">
      <div class="modal__wrap">
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
