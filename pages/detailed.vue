<template>
  <div id="detailed">
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="detailed-left"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="10"
        :xl="10"
      >
        <div class="article my-card">
          <div class="article-title">
            {{ article[0].title }}
          </div>
          <div class="article-message">
            <span>
              <i class="el-icon-date" />
              {{ article[0].addTime }}
            </span>
            <span>
              <i class="el-icon-folder" />
              {{ article[0].typeName }}
            </span>
            <span>
              <i class="el-icon-view" />
              {{ article[0].viewCount }}
            </span>
          </div>
          <div class="article-content">
            <vue-markdown
              :toc="true"
              :toc-id="`nav-list`"
              :toc-first-level="2"
              :toc-last-level="3"
            >{{ article[0].articleContent }}</vue-markdown>
          </div>
        </div>
      </el-col>
      <el-col
        class="detailed-right hidden-sm-and-down"
        :md="7"
        :lg="4"
        :xl="4"
      >
        <aside>
          <author />
          <div class="article-nav my-card">
            <div class="nav-title">
              文章目录
            </div>
            <div id="nav-list" />
          </div>
        </aside>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Author from '~/components/Author.vue'

@Component({
  components: {
    Author
  },

  watchQuery: ['id'],

  async asyncData (context: any) {
    const articleId = context.route.query.id

    const { data } = await context.$axios.$get(`/default/getArticleById/${articleId}`)

    // console.log(data)
    return { article: data }
  }
})

export default class Detailed extends Vue {

}
</script>

<style lang="scss">
@import "~/assets/scss/page/detailed.scss";
</style>
