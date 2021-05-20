<template>
  <div class="c-code-highight">
    <dl>
      <AtomsTitlesTit
        tit-tag="dt"
        tit-class="code-highlight"
        :tit-txt="codeFile"
      />
      <dd class="c-code-highlight_body">
        <pre v-highlightjs><code class="codeType">
          <slot />
        </code></pre>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    codeFile: {
      type: String,
      default: ''
    },
    codeType: {
      type: String,
      default: ''
    }
  }
}
</script>
