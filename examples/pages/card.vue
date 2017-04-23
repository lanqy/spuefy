<template>
  <div class="container docs-content">
    <header class="text-center">
      <h3>Cards</h3>
    </header>
    <div class="columns">
      <div class="column col-6 col-xs-12">
        <s-card>
          <img slot="image" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
          <div slot="header">
            <div class="card-title">Microsoft</div>
            <div class="card-subtitle">Software and hardware</div>
          </div>
          <p slot="body">
            Empower every person and every organization on the planet to achieve more.
          </p>
          <s-button slot="footer" @click="handleClick" type="primary">Do</s-button>
        </s-card>
      </div>

      <div class="column col-6 col-xs-12">
          <s-card>
            <div slot="header">
              <div class="card-title">Microsoft</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <img slot="imageCenter" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
            <p slot="body">
              Empower every person and every organization on the planet to achieve more.
            </p>
            <s-button-group slot="footer" is-block>
                <s-button type="primary" class="active">Buy</s-button>
                <s-button>Buy</s-button>
                <s-button>Buy</s-button>
            </s-button-group>
          </s-card>
      </div>

      <div class="column col-6 col-xs-12">

      </div>

      <div class="column col-6 col-xs-12">

      </div>

      <div class="column col-6 col-xs-12">

      </div>

      <div class="column col-6 col-xs-12">

      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>
