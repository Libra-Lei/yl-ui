<template>
  <div class="layout">
    <vs-sidebar
      static-position
      default-index="0-0"
      color="primary"
      class="sidebarx"
      spacer
      v-model="active"
      hidden-background
    >

      <div class="header-sidebar" slot="header">
        <h4>
          YL-UI
        </h4>
      </div>

      <template
        v-for="(group, index1) in menus"
      >
        <vs-divider :key="`gr-${index1}`" position="left">
          {{ group.group }}
        </vs-divider>

        <template
          v-for="(item, index2) in group.children"
        >
          <vs-sidebar-item :key="`${index1}-${index2}`" :index="`${index1}-${index2}`" icon="gavel" :to="item.path">
            {{ item.name }}
          </vs-sidebar-item>
        </template>

      </template>

    </vs-sidebar>

    <!-- 内容 -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: true
    }
  },
  computed: {
    menus() {
      const org = this.$router.options.routes.filter(x => !x.hidden);

      return org.map(x => {
        let children = x.children? x.children : [];
        children = children
          .filter(y => !y.hidden)
          .map(y => {
            return {
              name: y.name,
              path: `${x.path}/${y.path}`
            }
          });

        return {
          group: x.path === '/base'? '基础组件' : '高阶组件',
          children: children
        }
      });
    }
  }
}
</script>

<style lang="less" scope>
  .layout {
    width: 100;
    height: 100%;

    display: flex;

    &>.content {
      flex: 1;
      height: 100%;
      padding: 20px;
    }

  }
</style>