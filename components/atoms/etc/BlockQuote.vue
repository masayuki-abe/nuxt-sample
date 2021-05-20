<template>
  <blockquote class="c-blockquote" :cite="blockquoteCite">
    <dl>
      <AtomsTitlesTit
        tit-tag="dt"
        tit-class="blockquote"
        :tit-txt="blockquoteTitle"
      />
      <dd class="c-blockquote_body">
        {{ blockquoteCite }}
      </dd>
    </dl>
  </blockquote>
</template>

<script>
export default {
  props: {
    blockquoteCite: {
      type: String,
      default: ''
    },
    blockquoteTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
