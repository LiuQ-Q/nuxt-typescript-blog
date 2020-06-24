<template>
  <header id="header">
    <div class="header-logo">
      <h1>
        LQ-QのBlog
      </h1>
      <h3>
        Do what you love,Love what you do
      </h3>
    </div>

    <!-- 屏幕宽度 >= 768px -->
    <el-row
      class="header-nav-big hidden-xs-only"
      type="flex"
      justify="center"
    >
      <el-col :xs="24" :sm="24" :md="23" :lg="14" :xl="14">
        <el-menu
          id="boxFixed"
          :default-active="categoryId"
          class="header-nav-menu"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item index="0">
            首页
          </el-menu-item>
          <el-menu-item
            v-for="(type, i) of typeList"
            :key="i"
            :index="type.id+''"
          >
            {{ type.name }}
          </el-menu-item>
          <el-menu-item index="999">
            关于我
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <!-- 屏幕宽度 < 768px -->
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
        <div
          v-for="(type, i) of typeList"
          :key="type.id + i"
        >
          <nuxt-link :to="{ path: 'category', query: { id: type.id }}">
            {{ type.name }}
          </nuxt-link>
        </div>
        <div>
          <a href="http://resume.liu7.xyz/" target="_blank">关于我</a>
        </div>
      </el-collapse-item>
    </el-collapse>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  activeNames: string = ''
  typeList: Object[] = []
  categoryId: any = '0'
  // navIsFixed: Boolean = false
  // navOffsetTop: number = 0

  mounted () {
    this.getCategory()
    this.setCategoryId()

    // if (process.browser) {
    //   window.addEventListener('scroll', this.initHeight)
    //   this.$nextTick(() => {
    //     this.navOffsetTop = document.querySelector('#boxFixed').offsetTop
    //   })
    // }
  }

  handleSelect (index: String) {
    if (index === '0') {
      this.$router.push({ path: '/' })
    } else if (index === '999') {
      this.$router.push({ path: '/' })
      window.open('http://resume.liu7.xyz/')
    } else {
      this.$router.push({ path: 'category?id=' + index })
    }
  }

  handleChange () {
  }

  async getCategory () {
    const { data } = await this.$axios.$get('/default/getTypeInfo/')
    this.typeList = data
  }

  setCategoryId () {
    if (this.$route.query.id) {
      this.categoryId = this.$route.query.id
    } else {
      this.categoryId = '0'
    }
  }

  // initHeight () {
  //   const scrollTop: any = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //   this.navIsFixed = scrollTop > this.navOffsetTop
  // }
}
</script>

<style lang="scss">
@import "~/assets/scss/component/header.scss";
</style>
