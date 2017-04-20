<template>
  <li>
    <s-link class="item-inner" :class="navigate ? 'item-navigate' : ''" :to="to">
      <div class="media" v-if="$slots.media"><slot name="media"></slot></div>
      <div class="content">
        <label class="title"><slot></slot></label>
        <label class="desc" v-if="$slots.desc"><slot name="desc"></slot></label>
      </div>
      <div class="after" v-if="$slots.after"><slot name="after"></slot></div>
      <i class="icon icon-right" v-if="navigate"></i>
    </s-link>
  </li>
</template>

<script>
import sLink from './link'

export default {
  name: 's-list-item',
  components: {
    sLink
  },
  props: {
    to: String,
    navigate: Boolean
  }
}
</script>
