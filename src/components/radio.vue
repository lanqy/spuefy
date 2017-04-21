<template>
  <label class="form-radio">
    <input type="radio"
    :disabled="disabled"
    :checked="isChecked"
    :name="name"
    :value="this.value"
    @change="changed">
    <i class="form-icon"></i>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 's-radio',
  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    name: String
  },
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    changed(event) {
      this.$parent.updateValue(this.value, event)
    }
  },
  created() {
    if (!this.$parent.isRadioGroupComponent) {
      this.$destroy()
      throw new Error('You should wrap Radio on a Radio Group')
    }
  }
};
</script>
