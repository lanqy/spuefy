<template>
        <input
            v-if="type !== 'textarea'"
            class="form-input"
            :class="[inputSize,validateCls]"
            ref="input"
            :type="newType"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            :minlength="minlength"
            :autocomplete="newAutocomplete"
            :required="required"
            :min="min"
            :max="max"
            :step="step"
            :pattern="pattern"
            :value="newValue"
            @input="input"
            @blur="onBlur"
            @focus="$emit('focus', $event)"
            @change="$emit('change', newValue)">

        <textarea
            v-else
            class="form-input"
            :class="[validateCls]"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :maxlength="maxlength"
            :minlength="minlength"
            :value="newValue"
            @input="input"
            @blur="onBlur"
            @focus="$emit('focus', $event)"
            @change="$emit('change', newValue)">
        </textarea>
</template>
<script>
export default {
  name: 's-input',
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    validate: String,
    size: String,
    expanded: Boolean,
    passwordReveal: Boolean,
    loading: Boolean,
    icon: String,
    iconPack: String,

    // Native options
    autocomplete: String,
    required: Boolean,
    disabled: Boolean,
    max: [Number, String],
    maxlength: [Number, String],
    min: [Number, String],
    minlength: [Number, String],
    name: String,
    pattern: String,
    placeholder: String,
    readonly: Boolean,
    step: [Number, String]
  },
  data() {
    return {
      newValue: this.value,
      newType: this.type,
      validateCls: this.validate,
      newAutocomplete: this.autocomplete || 'on',
      isPasswordVisible: false
    };
  },
  computed: {
    hasMessage() {
      return this.$parent.isFieldComponent && this.$parent.newMessage;
    },
    inputSize() {
      if (this.size) {
        return 'input-' + this.size;
      }
      return '';
    },
    inputType() {

    }
  },
  watch: {
    value(value) {
      this.newValue = value;
    },
    newValue(value) {
      this.$emit('change', value);
    }
  },
  methods: {
    input(event) {
      const val = event.target.value;
      this.newValue = val;
      this.validator(event);
      this.$emit('input', val);
    },
    onBlur(event) {
      this.$emit('blur', event);
      this.validator(event);
    },
    validator(e) { // simple validator for example,
      var v = e.target.value;
      var message = '';
      if (!v) {
        message = 'invalid.';
        this.validateCls = 'is-error';
      } else {
        message = 'available.';
        this.validateCls = 'is-success';
      }
      if (this.$parent.isFieldComponent) {
        // Set message only if user haven't defined
        if (!this.$parent.message) {
          this.$parent.newMessage = message
        }
      }
    }
  }
};

</script>
