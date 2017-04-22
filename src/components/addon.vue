<template>
  <span class="input-group-addon" :class="[addonSize]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 's-addon',
  props: {
    size: String
  },
  computed: {
    addonSize() {
      if (this.size) {
        return 'addon-' + this.size;
      }
      return '';
    }
  }
}
</script>
