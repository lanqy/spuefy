<template>
  <div class="container docs-content">
    <header class="text-center">
      <h3>Input</h3>
    </header>
    <div class="columns">
      <div class="column col-xs-12">
        <s-field label="Name" message="This is an enable input with a label">
          <s-input @change="handleChange" @focus="handleFocus" @blur="handleBlur" autocomplete="off" placeholder="Name"></s-input>
        </s-field>
      </div>
    </div>
    <div class="columns">
      <div class="column col-xs-12">
        <s-field label="Email" message="This input is enable input with a label">
          <s-input @change="handleChange" @focus="handleFocus" @blur="handleBlur" autocomplete="off" placeholder="Email"></s-input>
        </s-field>
      </div>
    </div>
    <div class="columns">
      <div class="column col-xs-12">
        <s-field message="This is a disabled input without label">
          <s-input @change="handleChange" disabled @focus="handleFocus" @blur="handleBlur" autocomplete="off" placeholder="Name"></s-input>
        </s-field>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Gender</label>
      <s-radio-group v-model="radio">
          <s-radio value="Male">Male</s-radio>
          <s-radio value="Female">Female</s-radio>
          <s-radio value="boths" disabled>boths</s-radio>
      </s-radio-group>
    </div>
    <p class="content"><b>Selection:</b> {{ radio }}</p>
    <div class="form-group">
      <s-switch @change="handleChange">{{switchState}}</s-switch>
    </div>
    <div class="form-group">
      <s-switch @change="handleChange" disabled>disabled</s-switch>
    </div>

    <div class="form-group">
      <s-checkbox @change="handleCheckboxChange" v-model="checkboxState">{{checkboxState}}</s-checkbox>
    </div>
    <div class="form-group">
      <s-checkbox @change="handleCheckboxChange" disabled>disabled</s-checkbox>
    </div>

    <s-checkbox-group v-model="checkboxGroup">
      <s-checkbox custom-value="a">a</s-checkbox>
      <s-checkbox custom-value="b">b</s-checkbox>
      <s-checkbox custom-value="c">c</s-checkbox>
      <s-checkbox custom-value="d" disabled>d</s-checkbox>
    </s-checkbox-group>

    <p class="content"><b>Selection:</b> {{ checkboxGroup }}</p>

    <div class="columns">
      <div class="column col-xs-12">
        <s-field label="Message">
          <s-input @change="handleChange" type="textarea" @focus="handleFocus" @blur="handleBlur" autocomplete="off" placeholder="Message"></s-input>
        </s-field>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      switchState:false,
      checkboxState: true,
      checkboxGroup: ['a'],
      radio: 'Male'
    }
  },
  methods:{
    handleBlur(evt){
      console.log(evt);
    },
    handleFocus(evt){
      console.log(evt);
    },
    handleChange(evt){
      console.log('evt:',evt)
      this.switchState = evt;
    },
    handleCheckboxChange(evt){
      console.log('evt:',evt)
      this.checkboxState = evt;
    },
    updateValue(event) {
      // this.radioSelected = event.target.value;
    }
  }
}
</script>
