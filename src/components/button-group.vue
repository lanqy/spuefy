<template>
  <div class="btn-group" :class="isBlock ? 'btn-group-block' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-button-group',
  props: {
    isBlock: Boolean
  }
};
</script>
