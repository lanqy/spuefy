<template>
  <div class="container docs-content page">
    <header class="text-center"><h3>Buttons</h3></header>
    <div class="columns">
    <div class="column col-xs-12">
      <s-popover>
        <s-button type="primary">top popover</s-button>
        <div slot="content">
          <s-card>
            <div slot="header">
              <div class="card-title">Apple</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">To make a contribution to the world by making tools for the mind that advance humankind.</p>
            <s-button slot="footer" @click="handleClick" type="primary">Buy</s-button>
          </s-card>
      </div>
      </s-popover>
    </div>
    <div class="column col-xs-12">
      <s-popover dir="left">
        <s-button type="primary">left popover</s-button>
        <div slot="content">
          <s-card>
            <div slot="header">
              <div class="card-title">Apple</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">To make a contribution to the world by making tools for the mind that advance humankind.</p>
            <s-button slot="footer" type="primary">Buy</s-button>
          </s-card>
          </div>
      </s-popover>
    </div>
    <div class="column col-xs-12">
      <s-popover dir="right">
        <s-button type="primary">right popover</s-button>
        <div slot="content">
          <s-card>
            <div slot="header">
              <div class="card-title">Apple</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">To make a contribution to the world by making tools for the mind that advance humankind.</p>
            <s-button slot="footer" type="primary">Buy</s-button>
          </s-card>
        </div>
      </s-popover>
    </div>
    <div class="column col-xs-12">
      <s-popover dir="bottom">
        <s-button type="primary">bottom popover</s-button>
        <div slot="content">
          <s-card>
            <div slot="header">
              <div class="card-title">Apple</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">To make a contribution to the world by making tools for the mind that advance humankind.</p>
            <s-button slot="footer" type="primary">Buy</s-button>
          </s-card>
        </div>
      </s-popover>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    handleClick(evt) {
      console.log(evt);
      // this.$el.remove();
    }
  }
}
</script>

<style lang="css">
</style>
