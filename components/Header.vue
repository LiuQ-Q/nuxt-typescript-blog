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
    <el-row
      class="header-nav-big hidden-xs-only"
      type="flex"
      justify="center"
    >
      <el-col :xs="24" :sm="24" :md="23" :lg="14" :xl="14">
        <el-menu
          default-active="0"
          class="header-nav-menu"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item index="0">
            <nuxt-link to="/">
              首页
            </nuxt-link>
          </el-menu-item>
          <el-menu-item
            v-for="(type, i) of typeList"
            :key="i"
            :index="type.id+''"
          >
            <nuxt-link :to="{ path: 'category', query: { id: type.id }}">
              {{ type.name }}
            </nuxt-link>
          </el-menu-item>
          <el-menu-item>
            <a href="http://resume.liu7.xyz/" target="_blank">关于我</a>
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

  mounted () {
    this.getCategory()
  }

  handleSelect () {
  }

  handleChange () {
  }

  async getCategory () {
    const { data } = await this.$axios.$get('/default/getTypeInfo/')
    // console.log(data)
    this.typeList = data
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/component/header.scss";
</style>
