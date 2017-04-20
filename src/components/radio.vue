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
      console.log(event);
      console.log(this.$parent);
      // this.$parent.updateValue(this.value, event);
    }
  },
  created() {
  }
};

</script>

<style lang="css">
</style>
