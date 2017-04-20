<template>
  <div class="container docs-content">

    <header class="text-center">
      <h3>Buttons</h3>
    </header>
    <section class="notes">
      <p><strong>Buttons</strong> include simple button styles for actions in different types and sizes. </p>
    </section>
      <div class="columns">
        <div class="column col-xs-12">
          <s-button @click="handleClick">Default button</s-button>
        </div>
        <div class="column col-xs-12">
          <s-button ref="btn1" type="primary">Primary button</s-button>
        </div>
        <div class="column col-xs-12">
          <s-button type="link">Link button</s-button>
        </div>
      </div>
      <div class="columns">
        <div class="column col-xs-12">
        <s-button @click="handleClick" loading>Default button</s-button>
      </div>
      <div class="column col-xs-12">
        <s-button ref="btn1" type="primary" loading>Primary button</s-button>
      </div>
      <div class="column col-xs-12">
        <s-button type="link" loading>Link button</s-button>
      </div>
      </div>

      <div class="columns">
        <div class="column col-xs-12">
        <s-button @click="handleClick" disabled>Default button</s-button>
      </div>
      <div class="column col-xs-12">
        <s-button ref="btn1" type="primary" disabled>Primary button</s-button>
      </div>
      <div class="column col-xs-12">
        <s-button type="link" disabled>Link button</s-button>
      </div>
      </div>

      <header class="text-center">
        <h4>Button sizes</h4>
      </header>
      <div class="columns">
        <div class="column col-xs-12">
            <s-button type="primary" size="lg">
              large button
            </s-button>

            <s-button type="primary">
              normal
            </s-button>

            <s-button type="primary" size="sm">
              small
            </s-button>
        </div>
        <div class="column col-xs-12">
          <s-button type="primary" action size="lg">
            <s-icon icon="menu"></s-icon>
          </s-button>

          <s-button type="primary" action>
            <s-icon icon="menu"></s-icon>
          </s-button>

          <s-button type="primary" action size="sm">
            <s-icon icon="menu"></s-icon>
          </s-button>
        </div>
        <div class="column col-xs-12">
            <s-button type="primary" action size="lg" circle>
              <s-icon icon="arrow" dir="up"></s-icon>
            </s-button>

            <s-button type="primary" action circle>
              <s-icon icon="arrow" dir="up"></s-icon>
            </s-button>

            <s-button type="primary" action size="sm" circle>
              <s-icon icon="arrow" dir="up"></s-icon>
            </s-button>
        </div>
      </div>


      <header class="text-center">
        <h4></h4>
      </header>

      <div class="columns">
        <div class="column col-xs-12">
              <s-button type="primary" size="lg">
                <s-icon icon="arrow" dir="left"></s-icon>
                large
              </s-button>

              <s-button type="primary" size="lg">
                large
              </s-button>

              <s-button type="primary" size="normal">
                <s-icon icon="arrow" dir="left"></s-icon>
                normal
                </s-button>

              <s-button type="primary" size="normal">
                normal
              </s-button>

              <s-button type="primary" size="sm">
                <s-icon icon="arrow" dir="left"></s-icon>
                small
                </s-button>

              <s-button type="primary" size="sm">
                small
              </s-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.btn1.$on('click', function(ev) {
      console.log(ev)
    })
  },
  methods: {
    handleClick(ev) {
      console.log(ev)
    }
  }
}
</script>

<style lang="less">
  .btn-group .btn {
    margin-bottom: 15px;
  }
</style>
