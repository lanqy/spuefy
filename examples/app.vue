<template>
  <div class="root container grid-960">
    <div class="columns">
      <router-link class="page-back" v-if="visible" :to="'/'">
      </router-link>
      <router-view class="page"></router-view>
    </div>
  </div>
</template>

<style lang="less">
@import "../src/less/spectre.less";

body {
  background-color: #ebebec;
}

</style>

<script type="text/babel">
export default {
  computed: {
    visible() {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
    }
  }
}
</script>
