<template>
  <div id="home">
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="home-left"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="10"
        :xl="10"
      >
        <articles :article-list="articleList" />
        <!-- <articles /> -->
      </el-col>
      <el-col
        class="home-right hidden-sm-and-down"
        :md="7"
        :lg="4"
        :xl="4"
      >
        <aside>
          <author />
        </aside>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Articles from '~/components/Articles.vue'
import Author from '~/components/Author.vue'

@Component({
  components: {
    Articles,
    Author
  },

  async asyncData (context: any) {
    const { data } = await context.$axios.$get('/default/getArticleList/')
    data.sort((a: any, b: any) => {
      return Date.parse(b.addTime) - Date.parse(a.addTime)
    })
    return { articleList: data }
  }
})

export default class Index extends Vue {
  articleList: Object[] = []

  mounted () {
    // console.log(this.$api.getArticleList())
  }
}
</script>

<style lang="scss">
#home {
  margin-top: 2rem;

  .home-right {
    padding-left: 1rem;
  }
}
</style>
