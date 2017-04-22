<template>
  <button
    class="btn"
    :class="[btnClasses,tooltipClass]"
    :type="nativeType"
    :disabled="disabled"
    :loading="loading"
    :dropdown="dropdown"
    :tooltip="tooltip"
    :group="group"
    :tipDir="tipDir"
    :data-tooltip="tooltipTxt"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 's-button',
  props: {
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    tooltipTxt: String,
    plain: Boolean,
    group: Boolean,
    action: Boolean,
    tooltip: Boolean,
    dropdown: Boolean,
    circle: Boolean,
    tipDir: String, // tooltip direction
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
        'dropdown-toggle': this.dropdown,
        'btn-action': this.action,
        'input-group-btn': this.group,
        'tooltip': this.tooltip,
        'circle': this.circle,
        'disabled': this.disabled
      }
      return classes
    },
    tooltipClass() {
      if (this.tipDir) {
        return 'tooltip-' + this.tipDir;
      }
      return '';
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
