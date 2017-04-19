<template>
  <div class="container">
    <h1>Button</h1>
      <div class="columns">
        <div class="column col-xs-12">
          <spuefy-button @click="handleClick">Default button</spuefy-button>
        </div>
        <div class="column col-xs-12">
          <spuefy-button ref="btn1" type="primary">Primary button</spuefy-button>
        </div>
        <div class="column col-xs-12">
          <spuefy-button type="link">Link button</spuefy-button>
        </div>
      </div>
      <div class="columns">
        <div class="column col-xs-12">
        <spuefy-button @click="handleClick" loading>Default button</spuefy-button>
      </div>
      <div class="column col-xs-12">
        <spuefy-button ref="btn1" type="primary" loading>Primary button</spuefy-button>
      </div>
      <div class="column col-xs-12">
        <spuefy-button type="link" loading>Link button</spuefy-button>
      </div>
      </div>
      <div class="columns">
        <div class="column col-xs-12">
        <spuefy-button @click="handleClick" disabled>Default button</spuefy-button>
      </div>
      <div class="column col-xs-12">
        <spuefy-button ref="btn1" type="primary" disabled>Primary button</spuefy-button>
      </div>
      <div class="column col-xs-12">
        <spuefy-button type="link" disabled>Link button</spuefy-button>
      </div>
      </div>

      <div class="columns">
        <div class="column col-xs-12">
            <spuefy-button type="primary" size="lg">
              large button
            </spuefy-button>
            <spuefy-button type="primary">
              normal
            </spuefy-button>

            <spuefy-button type="primary" size="sm">
              small
            </spuefy-button>
        </div>
        <div class="column col-xs-12">
          <spuefy-button type="primary" action size="lg">
            <i class="icon icon-menu"></i>
          </spuefy-button>

          <spuefy-button type="primary" action>
            <i class="icon icon-menu"></i>
          </spuefy-button>

            <spuefy-button type="primary" action size="sm">
              <i class="icon icon-menu"></i>
            </spuefy-button>
        </div>
        <div class="column col-xs-12">
            <spuefy-button type="primary" action size="lg" circle>
              <i class="icon icon-arrow-up"></i>
            </spuefy-button>

            <spuefy-button type="primary" action circle>
              <i class="icon icon-arrow-up"></i>
            </spuefy-button>

              <spuefy-button type="primary" action size="sm" circle>
                <i class="icon icon-arrow-up"></i>
              </spuefy-button>
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
