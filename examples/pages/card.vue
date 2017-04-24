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
            <img slot="imageCenter" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
            <div slot="header">
              <div class="card-title">Apple</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">
              To make a contribution to the world by making tools for the mind that advance humankind.
            </p>
            <s-button-group slot="footer" is-block>
                <s-button type="primary" class="active">Buy</s-button>
                <s-button>Buy</s-button>
                <s-button>Buy</s-button>
            </s-button-group>
          </s-card>
      </div>

      <div class="column col-6 col-xs-12">
          <s-card>
            <img slot="imageBody" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
            <div slot="header">
              <div class="card-title">Google</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">
              Organize the world’s information and make it universally accessible and useful.
            </p>
            <div slot="footer">
                <s-button type="primary">Search</s-button>
                <s-button type="link">Share</s-button>
            </div>
          </s-card>
      </div>

      <div class="column col-6 col-xs-12">
          <s-card>
            <img slot="image" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
            <p slot="body">
              <strong>Surface Studio.</strong>
              Turn your desk into a Studio. Surface Studio is designed for the creative process.
            </p>
            <div slot="footer">
                <s-button type="primary">Buy</s-button>
                <s-button type="link">Share</s-button>
            </div>
          </s-card>
      </div>

      <div class="column col-6 col-xs-12">
          <s-card>
            <div slot="header">
              <div class="card-title">Apple</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <img slot="imageFooter" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
            <p slot="body">To make a contribution to the world by making tools for the mind that advance humankind.</p>
          </s-card>
      </div>

      <div class="column col-6 col-xs-12">
          <s-card>
            <img slot="image" src="../assets/osx-el-capitan.jpg" class="img-responsive" />
            <div slot="header">
              <s-button class="float-right" type="primary">
                <s-icon icon="plus"></s-icon>
              </s-button>
              <div class="card-title">Google I/O</div>
              <div class="card-subtitle">Software and hardware</div>
            </div>
            <p slot="body">To make a contribution to the world by making tools for the mind that advance humankind.</p>
          </s-card>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>
