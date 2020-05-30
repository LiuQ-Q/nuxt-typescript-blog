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
        :lg="8"
        :xl="8"
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
          456
        </aside>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Articles from '~/components/Articles.vue'

@Component({
  components: {
    Articles
  },

  async asyncData (context) {
    const { data } = await context.$axios.$get('/default/getArticleList/')
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

  .home-left {

  }

  .home-right {
    padding-left: 1rem;

    aside {
      background-color: green;
    }
  }
}
</style>
