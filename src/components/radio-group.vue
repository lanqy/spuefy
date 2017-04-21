<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-radio-group',
  props: {
    value: [String, Number, Boolean]
  },
  watch: {
    value() {
      this.findChecked()
    }
  },
  data() {
    return {
      isRadioGroupComponent: true // Used internally by Radio and Radio Button
    };
  },
  methods: {
    updateValue(value, event) {
      this.$emit('change', value, event)
      this.$emit('input', value)
    },
    findChecked() {
      this.$children.forEach((child) => { // forEach children components
        child.isChecked = this.value === child.value
      })
    }
  },
  mounted() {
    console.log('component mounted');
    this.findChecked()
  }
};
</script>
