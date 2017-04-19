<template>
  <li>
    <spuefy-link class="item-inner" :class="navigate ? 'item-navigate' : ''" :to="to">
      <div class="media" v-if="$slots.media"><slot name="media"></slot></div>
      <div class="content">
        <label class="title"><slot></slot></label>
        <label class="desc" v-if="$slots.desc"><slot name="desc"></slot></label>
      </div>
      <div class="after" v-if="$slots.after"><slot name="after"></slot></div>
      <i class="icon icon-right" v-if="navigate"></i>
    </spuefy-link>
  </li>
</template>

<script>
import SpuefyLink from './link'

export default {
  name: 'spuefy-list-item',
  components: {
    SpuefyLink
  },
  props: {
    to: String,
    navigate: Boolean
  }
}
</script>
