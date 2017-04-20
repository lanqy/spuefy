<template>
    <i class='icon' :class="[`icon-${newIcon}`]"></i>
</template>

<script>
export default {
  name: 's-icon',
  props: {
    icon: String,
    dir: String // direction of icon
  },
  computed: {
    newIcon() {
      return this.icon + this.getDir();
    }
  },
  methods: {
    getDir: function() {
      return this.dir ? '-' + this.dir : '';
    }
  }
};

</script>
