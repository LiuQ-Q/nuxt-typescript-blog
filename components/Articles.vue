<template>
  <article class="articles">
    <div
      v-for="(article, index) of articleList"
      :key="index"
      class="item my-card"
    >
      <div class="item-title">
        <!-- <nuxt-link :to="{ path: 'detailed', query:{id: article.id}}">
          {{ article.title }}
        </nuxt-link> -->
        <a :href="`/detailed?id=${article.id}`">{{ article.title }}</a>
      </div>
      <div class="item-icon">
        <span>
          <i class="el-icon-date" />
          {{ article.addTime }}
        </span>
        <span>
          <i class="el-icon-folder" />
          {{ article.typeName }}
        </span>
        <span>
          <i class="el-icon-view" />
          {{ article.viewCount }}
        </span>
      </div>
      <div class="item-content">
        <div class="item-image">
          <!-- <nuxt-link :to="{ path: 'detailed', query:{id: article.id}}">
            <img :src="article.image"></img>
          </nuxt-link> -->
          <a :href="`/detailed?id=${article.id}`">
            <img :src="article.image"></img>
          </a>
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

  mounted () {
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/component/articles.scss";
</style>
