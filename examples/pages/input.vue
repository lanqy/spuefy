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
      <s-radio name="gender" value="Male">Male</s-radio>
      <s-radio name="gender" value="Female">Female</s-radio>
      <!-- <p>selected: {{radioSelected}}</p> -->
    </div>
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
      radioSelected:''
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
    },
    updateValue(event) {
      // this.radioSelected = event.target.value;
    }
  }
}
</script>
