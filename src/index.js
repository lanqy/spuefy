import ButtonGroup from './components/button-group'
import Button from './components/button'
import Link from './components/link'
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
import Label from './components/label'
import Dropdown from './components/dropdown'
import Menu from './components/menu'
import Popover from './components/popover'
import Card from './components/card'

const components = {
  ButtonGroup,
  Button,
  Link,
  Icon,
  Field,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Switch,
  Checkbox,
  CheckboxGroup,
  Addon,
  Label,
  Dropdown,
  Menu,
  Popover,
  Card
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
