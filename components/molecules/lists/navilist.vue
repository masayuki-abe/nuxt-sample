<template>
  <ul class="navilist">
    <li>
      <Nuxt-link to="/">
        Home
      </Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/sample/">
        Sample
      </Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/about/">
        About us
      </Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/contact/">
        Contact
      </Nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navilist{
  @include dflex(fe, fe);

  list-style: none;
  flex-direction: column;

  li{
    a{
      @include dis(block);
      @include fontSet(42, 42, 100, $tab);

      padding: .5em 1em;
      color: $dark;
      font-weight: 700;
      text-decoration: none;
    }
  }
}

@include tab() {
.navilist{
  li{
    a{
      @include fontSet(28, 28, 100, $tab);
    }
  }
}
}

@include lap() {
.navilist{
  @include dflex(fe, c);

  flex-direction: row;

  li{
    a{
      @include dis(block);
      @include fontSet(16, 16, 100, $lap);

      margin: 0 .8em;
      padding: .2em;
      transition: background .6s ease, color .6s ease;

      &:hover{
        background-color: $dark;
        color: $white;
      }
    }
  }
}
}
</style>
