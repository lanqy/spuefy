<template>
  <span class="label"
    :class="[labelClasses]"
    @click="handleClick"
    >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 's-label',
  props: {
    type: String
  },
  computed: {
    labelClasses() {
      const classes = {
        [`label-${this.type}`]: true
      }
      return classes
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
      console.log(evt);
    }
  }
}
</script>
