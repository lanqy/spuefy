import $ from './utils/NodeList.js'

import Button from './components/button'
import Link from './components/link'
import ListItem from './components/list-item'
import List from './components/list'

const install = function(Vue) {
  if (install.installed) return

  Vue.component(Button.name, Button)
  Vue.component(Link.name, Link)
  Vue.component(ListItem.name, ListItem)
  Vue.component(List.name, List)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  $,
  install,
  version: '1.0.0-beta2',
  Button,
  Link,
  ListItem,
  List
}
