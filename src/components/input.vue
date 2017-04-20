<template>
    <p class="control">
        <input
            v-if="type !== 'textarea'"
            class="form-input"
            :class="[size]"
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
    </p>
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
      newAutocomplete: this.autocomplete || 'on',
      isPasswordVisible: false
    };
  },
  computed: {
    hasMessage() {
      return this.$parent.isFieldComponent && this.$parent.newMessage;
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
      this.$emit('input', val);
    },
    onBlur(event) {
      this.$emit('blur', event);
    }
  }
};

</script>
