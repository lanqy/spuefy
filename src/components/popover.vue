<template>
  <div class="popover" :class="[popoverClasss]">
    <slot></slot>
    <div class="popover-container">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-popover',
  props: {
    dir: String // popover direction
  },
  computed: {
    popoverClasss() {
      if (this.dir) {
        return 'popover-' + this.dir;
      }
      return '';
    }
  }
}
</script>
