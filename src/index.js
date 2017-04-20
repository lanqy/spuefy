import Button from './components/button'
import Link from './components/link'
import ListItem from './components/list-item'
import List from './components/list'
import Icon from './components/icon'
import Field from './components/field'
import Input from './components/input'
import Radio from './components/radio'

const components = {
  Button,
  Link,
  ListItem,
  List,
  Icon,
  Field,
  Input,
  Radio
}

components.install = (Vue, options = {}) => {
  for (const componentName in components) {
    const component = components[componentName];
    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }
}

export default components
