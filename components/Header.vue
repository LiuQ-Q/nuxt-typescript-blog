<template>
  <div id="header">
    <div class="header-logo">
      <h1>
        LQ-QのBlog
      </h1>
      <h3>
        Do what you love,Love what you do
      </h3>
    </div>
    <el-row
      class="header-nav-big hidden-xs-only"
      type="flex"
      justify="center"
    >
      <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="12">
        <el-menu
          default-active="1"
          class="header-nav-menu"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <nuxt-link to="/">
              首页
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="2">
            <nuxt-link to="/category">
              技术杂谈
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="4">
            关于我
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-collapse
      v-model="activeNames"
      class="header-nav-small hidden-sm-and-up"
      @change="handleChange"
    >
      <el-collapse-item title="Menu" name="1">
        <div>
          <nuxt-link to="/">
            首页
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/category">
            技术杂谈
          </nuxt-link>
        </div>
        <div>关于我</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1,
      activeNames: ''
    }
  },
  mounted () {
    this.getCategory()
  },
  methods: {
    handleSelect () {
    },
    handleChange () {

    },
    getCategory () {
      this.$axios.$get('http://123.56.40.114:7001/default/getTypeInfo/').then(
        (res) => {
          console.log(res)
        }
      )
    }
  }
}
</script>

<style lang="scss">
#header {
  .header-logo {
    height: 200px;
    background-image: url(../static/header-bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position-y: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,.15);
    color: #fff;
  }

  .header-nav-big {
    background-color: #545c64;

    .header-nav-menu {
      border-bottom: none;

      li {
        font-size: 1.2rem;
        border-bottom: none;

        &.is-active {
          color: #545c64;
          background-color: #F4F8FB !important;
          border-bottom: none !important;
        }

        a {
          text-decoration: none;
          vertical-align: baseline;
        }
      }
    }
  }

  .header-nav-small {
    .el-collapse-item__header {
      padding-left: 1rem;
      border-bottom: 1px solid #F4F8FB;
    }

    .el-collapse-item__content {
      text-align: center;
      line-height: 2rem;
      padding-bottom: 0;
    }
  }
}
</style>
