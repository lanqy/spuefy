<template>
  <div class="container docs-content">

    <header class="text-center">
      <h3>Buttons</h3>
    </header>
    <section class="notes">
      <p><strong>Buttons</strong> include simple button styles for actions in different types and sizes. </p>
    </section>

    <section class="notes">
      <p>Add the <code>btn</code> class to &lt;a&gt;, &lt;input&gt; or &lt;button&gt; elements for a default button. There are classes <code>btn-primary</code> and <code>btn-link</code> for predefined primary and link buttons. A button with the <code>loading</code> class can show loading indicator.  </p>
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

      <section class="notes">
        <p>Add the <code>disabled</code> class or the <code>disabled</code> attribute for a disabled button.</p>
      </section>

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
      <section class="notes">
        <p>Add the <code>btn-sm</code> or <code>btn-lg</code> class for small or large button size. Also, you can add the <code>btn-block</code> class for a full-width button. </p>
        <p>Please note that you could use the <code>btn-action</code> class for a square button, or add another <code>circle</code> class for a round button, which is often used as a Float Action Button (FAB).</p>
      </section>

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
        </div>
        <div class="column col-xs-12">
              <s-button type="primary" size="normal">
                <s-icon icon="arrow" dir="left"></s-icon>
                normal
              </s-button>

              <s-button type="primary" size="normal">
                normal
              </s-button>
        </div>
        <div class="column col-xs-12">
              <s-button type="primary" size="sm">
                <s-icon icon="arrow" dir="left"></s-icon>
                small
              </s-button>

              <s-button type="primary" size="sm">
                small
              </s-button>
        </div>
      </div>
      <section class="notes">
        <p>Icons with the <code>icon</code> class can be correctly rendered in each button size. </p>
      </section>
      <header class="text-center">
        <h4>Button groups</h4>
      </header>

      <div class="columns">
        <div class="column col-xs-12">
          <s-button-group>
            <s-button tooltip data-tooltip="This is a message">first button</s-button>
            <s-button tooltip tipDir="left" data-tooltip="This is a message">first button</s-button>
            <s-button tooltip tipDir="right" data-tooltip="This is a message">third button</s-button>
            <s-button tooltip tipDir="bottom" data-tooltip="This is a message">four button</s-button>
          </s-button-group>
        </div>
        <div class="column col-xs-12">
          <s-button-group is-block>
            <s-button type="primary" class="active">first button</s-button>
            <s-button type="primary">first button</s-button>
            <s-button type="primary">third button</s-button>
          </s-button-group>
        </div>
      </div>


      <div class="columns">
        <div class="column col-xs-12">
          <s-button-group>
            <s-button size="sm" class="active">first button</s-button>
            <s-button size="sm">first button</s-button>
            <s-button size="sm">third button</s-button>
            <s-button size="sm">four button</s-button>
          </s-button-group>
        </div>
        <div class="column col-xs-12">
          <s-button-group is-block>
            <s-button size="sm" type="primary" class="active">first button</s-button>
            <s-button size="sm" type="primary">first button</s-button>
            <s-button size="sm" type="primary">third button</s-button>
          </s-button-group>
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
