<template>
    <label class="form-switch">
        <input
            type="checkbox"
            :name="name"
            :disabled="disabled"
            v-model="newValue"
            @change="$emit('change', newValue, $event)">
            <i class="form-icon"></i>
        <slot></slot>
    </label>
</template>

<script>
  export default {
    name: 's-switch',
    props: {
      value: Boolean,
      disabled: Boolean,
      name: String,
      checked: Boolean
    },
    data() {
      return {
        newValue: this.value
      };
    },
    watch: {
      value(value) {
        this.newValue = value;
      },
      newValue(value) {
        this.$emit('input', value);
      }
    },
    mounted() {
      if (this.checked) {
        this.newValue = this.checked;
      }
    }
  };
</script>
