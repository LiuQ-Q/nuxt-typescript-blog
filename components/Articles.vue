<template>
  <article class="articles">
    <div
      v-for="(article, index) of articleList"
      :key="index"
      class="item my-card"
    >
      <div class="item-title">
        <nuxt-link :to="{ path: 'detailed', query:{id: 1}}">
          {{ article.title }}
        </nuxt-link>
      </div>
      <div class="item-icon">
        <span>
          <i class="el-icon-date" />
          {{ article.date }}
        </span>
        <span>
          <i class="el-icon-folder" />
          {{ article.type }}
        </span>
        <span>
          <i class="el-icon-view" />
          {{ article.viewCount }}
        </span>
      </div>
      <div class="item-content">
        <div class="item-image">
          <nuxt-link :to="{ path: 'detailed', query:{id: 1}}">
            <img :src="article.image"></img>
          </nuxt-link>
        </div>
        <span class="item-introduce">
          {{ article.introduce }}
        </span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Articles extends Vue {
  @Prop(Array) articleList: Array<Object> | undefined
}
</script>

<style lang="scss">
@import "~/assets/scss/component/articles.scss";
</style>
