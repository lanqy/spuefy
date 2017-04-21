import ButtonGroup from './components/button-group'
import Button from './components/button'
import Link from './components/link'
import ListItem from './components/list-item'
import List from './components/list'
import Icon from './components/icon'
import Field from './components/field'
import Input from './components/input'
import InputGroup from './components/input-group'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Switch from './components/switch'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Addon from './components/addon'

const components = {
  ButtonGroup,
  Button,
  Link,
  ListItem,
  List,
  Icon,
  Field,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Switch,
  Checkbox,
  CheckboxGroup,
  Addon
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
