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
        <loading v-if="!loadStatus" />
        <articles v-if="loadStatus" :article-list="articleList" />
        <!-- <articles /> -->
      </el-col>
      <el-col
        class="home-right hidden-sm-and-down"
        :md="7"
        :lg="4"
        :xl="4"
      >
        <aside>
          <author style="position:sticky;top:1rem;" />
        </aside>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Articles from '~/components/Articles.vue'
import Author from '~/components/Author.vue'
import Loading from '~/components/Loading.vue'

@Component({
  components: {
    Articles,
    Author,
    Loading
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
  loadStatus: Boolean = false

  mounted () {
    // console.log(this.$api.getArticleList())
    this.loadStatus = true
  }
}
</script>

<style lang="scss">
#home {
  margin-top: 2rem;

  .home-right {
    padding-left: 1rem;

    aside {
      height: 100%;
    }
  }
}
</style>
