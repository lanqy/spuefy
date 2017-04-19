<template>
  <button
    class="btn"
    :class="btnClasses"
    :type="nativeType"
    :disabled="disabled"
    :loading="loading"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'spuefy-button',
  props: {
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    action: Boolean,
    circle: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'primary',
          'link'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'sm',
          'normal',
          'lg'
        ].indexOf(value) > -1
      }
    }
  },
  computed: {
    btnClasses() {
      const classes = {
        [`btn-${this.type}`]: true,
        [`btn-${this.size}`]: true,
        'btn-plain': this.plain,
        'loading': this.loading,
        'btn-action': this.action,
        'circle': this.circle,
        'disabled': this.disabled
      }
      return classes
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
