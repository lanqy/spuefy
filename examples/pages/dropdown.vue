<template>
  <div class="container docs-content">
      <header class="text-center">
        <h4>Dropdown menus</h4>
      </header>
      <div class="columns">
        <div class="column col-xs-12">
          <s-dropdown>
            <s-button-group>
              <s-button type="primary">dropdown button</s-button>
              <s-button type="primary" dropdown>
                <s-icon icon="caret"></s-icon>
              </s-button>
              <ul class="menu">
                <li class="menu-item">
                  <a href="#dropdowns">
                    Slack
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#dropdowns">
                    Hipchat
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#dropdowns">
                    Skype
                  </a>
                </li>
              </ul>
            </s-button-group>
          </s-dropdown>
        </div>

        <div class="column col-xs-12">
          <s-dropdown>
            <s-button type="primary" dropdown>
              dropdown button
              <s-icon icon="caret"></s-icon>
            </s-button>

            <ul class="menu">
              <li class="menu-item">
                <a href="#dropdowns">
                  Slack
                </a>
              </li>
              <li class="menu-item">
                <a href="#dropdowns">
                  Hipchat
                </a>
              </li>
              <li class="menu-item">
                <a href="#dropdowns">
                  Skype
                </a>
              </li>
            </ul>
          </s-dropdown>
        </div>

        <div class="column col-xs-12">
          <s-dropdown>
            <s-button type="link" dropdown>
              dropdown button
              <s-icon icon="caret"></s-icon>
            </s-button>
            <ul class="menu">
              <li class="menu-item">
                <a href="#dropdowns">
                  Slack
                </a>
              </li>
              <li class="menu-item">
                <a href="#dropdowns">
                  Hipchat
                </a>
              </li>
              <li class="menu-item">
                <a href="#dropdowns">
                  Skype
                </a>
              </li>
            </ul>
          </s-dropdown>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>
