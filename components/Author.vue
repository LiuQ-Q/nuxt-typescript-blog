<template>
  <div id="author" class="my-card">
    <div class="author-avatar">
      <img src="~/static/avatar.jpg" alt="Avatar">
    </div>
    <div class="author-info">
      <p>LQ-Q</p>
      <p>此博客前端使用 Nuxt + TypeScript + Element 构建, 目前还未全部完成, 仍在优化中, 项目后端使用 egg + mysql 构建, 项目目前运行在腾讯云, 使用 Nginx + pm2, 如对博客感兴趣, 可进入下方 github 拉取</p>
    </div>
    <div class="author-contact">
      <div class="contact-title">
        <span>社交账号</span>
      </div>
      <div class="contact-icon">
        <span>
          <a href="https://github.com/LiuQ-Q" target="_blank">
            <span class="el-icon-goods" />
          </a>
        </span>
        <span
          @mouseenter="changeStatus('qq')"
          @mouseleave="changeStatus('qq')"
        >
          <span class="el-icon-info" />
        </span>
        <span
          @mouseenter="changeStatus('weChat')"
          @mouseleave="changeStatus('weChat')"
        >
          <span class="el-icon-loading" />
        </span>
        <img
          src="~/static/qq.jpg"
          class="status-img"
          :style="{ display: qqStatus }"
        ></img>
        <img
          src="../static/wechat.jpg"
          class="status-img"
          :style="{ display: weChatStatus }"
        ><img>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Author extends Vue {
  private qqStatus: string = 'none'
  private weChatStatus: string = 'none'

  changeStatus (target: string) {
    if (target === 'qq') {
      this.qqStatus === 'none' ? this.qqStatus = 'block' : this.qqStatus = 'none'
    } else {
      this.weChatStatus === 'none' ? this.weChatStatus = 'block' : this.weChatStatus = 'none'
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/component/author.scss";
</style>
