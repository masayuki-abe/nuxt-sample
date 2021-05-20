<template>
  <main>
    <section id="p-sample-list_box01">
      <div class="c-box">
        <AtomsTitlesTit
          tit-tag="h2"
          tit-class="center"
          tit-txt="Sample"
        />
        <MoleculesListsSampleList />
        <AtomsButtonsTextBtn
          btn-style="rounded back"
          color="dark"
          link-path=""
          link-text="Back"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#p-sample-list_box01{
  .c-btn_text{
    width: 50%;
    margin: 0 auto;
  }
}
@include pc() {
  #p-sample-list_box01{
    width: per(1000, $pc);
    margin: 0 auto;
  }
}
</style>
