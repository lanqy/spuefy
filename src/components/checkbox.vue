<template>
  <label class="form-checkbox">
    <input
        type="checkbox"
        :disabled="disabled"
        :name="name"
        v-model="newValue"
        @change="$emit('change', newValue, $event)">
    <i class="form-icon"></i>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 's-checkbox',
  props: {
    value: Boolean,
    disabled: Boolean,
    name: String,
    checked: Boolean,
    customValue: [String, Number, Boolean]
  },
  data() {
    return {
      newValue: this.value
    };
  },
  watch: {
    /**
      * Sets internal value if v-model changes.
      */
    value(value) {
      this.newValue = value;
    },
    /**
      * Calls updateValue from parent if it's a Checkbox Group.
      */
    newValue(value) {
      this.$emit('input', value);
      this.$parent.isCheckboxGroup && this.$parent.updateValue();
    }
  },
  mounted() {
    console.log('checkbox mounted');

    if (this.checked) {
      this.newValue = this.checked;
    }
  }
};

</script>

<style lang="css">
</style>
