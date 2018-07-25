<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">

    </div>
  </div>
</template>

<script>
import { Sidebar } from "./components";
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: "layout",
  components: {
    Sidebar
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mibole"
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("CloseSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style scoped rel="stylesheet/scss" lang="scss">
@import 'src/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 999;
}
</style>