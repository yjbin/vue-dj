<template>
    <div class="menu-wrapper">
        <template v-for="item in routes" v-if="!item.hidden&&item.children">

            <router-link v-if="item.children.length===1 &&(!item.children[0].children||!item.children[0].children.length)" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name" tag="li">
                <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown' @click.native.stop="clickLink(item.path+'/'+item.children[0].path)">
                    <!-- <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon> -->
                    <img v-if="item.meta&&item.meta.icon" :src="changAloneimg(item.path,item.meta.icon)">
                    <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
                </el-menu-item>
            </router-link>

            <el-submenu v-else :index="item.name||item.path" :key="item.name">
                <template slot="title">
                    <!-- <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
                    <img v-if="item.meta&&item.meta.icon" :src="changAloneimg(item.path,item.meta.icon)">
                    <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
                </template>

                <template v-for="child in item.children" v-if="!child.hidden">
                    <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

                    <router-link v-else :to="item.path+'/'+child.path" :key="child.name" tag="li">
                        <el-menu-item :index="item.path+'/'+child.path" @click.native.stop="clickLink(item.path+'/'+child.path)">
                            <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
                            <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    proObj:{
      default: () => {}
    }
  },
  data() {
    return {
      aloneTab:""
    };
  },
  watch: {
    proObj:{
      handler: function(val) {
        this.aloneTab = val.path;
      },
      deep: true
    }
  },
  methods: {
    changAloneimg(path, icon) {
      if (path == this.aloneTab){
        return "../../../static/sliderBar/" + icon[1];
      } else {
        return "../../../static/sliderBar/" + icon[0];
      }
    },
    clickLink(path) {
      let isSame = this.$route.matched.some(r => {
        return r.path == path;
      });
      if (isSame) {
        this.$router.push("/refersh");
        this.$nextTick(function() {
          this.$router.push(path);
        });
      } else {
        this.$router.push(path);
      }
    }
  }
};
</script>
