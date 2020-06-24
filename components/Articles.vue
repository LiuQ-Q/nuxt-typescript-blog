<template>
  <article class="articles">
    <div
      v-for="(article, index) of articleList"
      :key="index"
      ref="articles"
      class="item my-card"
    >
      <div
        v-show="loadStatuList[index]"
        class="item-box"
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
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Articles extends Vue {
  @Prop(Array) articleList: Array<Object> | undefined

  loadStatuList: Array<Boolean> = []
  aaa: Number = 1

  mounted () {
    if ('IntersectionObserver' in window) {
      const articles: any = this.$refs.articles

      this.initLoadStatuList(true)

      // io 存在, 调用懒加载
      articles.forEach((article: any, index: any) => {
        this.lazyLoad(article, index)
      })
    } else {
      this.initLoadStatuList(false)
    }
  }

  initLoadStatuList (ioInWindow: Boolean) {
    if (ioInWindow && this.articleList) {
      this.loadStatuList = this.articleList.map((article) => {
        return false
      })
    } else if (!ioInWindow && this.articleList) {
      this.loadStatuList = this.articleList.map((article) => {
        return true
      })
    }
  }

  lazyLoad (target: any, index: any) {
    const options: Object = {
      root: null,
      rootMargin: '150px',
      threshold: 1
    }

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(index)
          // this.loadStatuList[index] = true
          Vue.set(this.loadStatuList, index, true)
        }
        // console.log(this.loadStatuList)
      })
    }, options)

    io.observe(target)
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/component/articles.scss";
</style>
