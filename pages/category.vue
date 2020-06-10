<template>
  <div id="category">
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="category-left"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="10"
        :xl="10"
      >
        <articles :article-list="categoryList" />
        <!-- <articles /> -->
      </el-col>
      <el-col
        class="category-right hidden-sm-and-down"
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

  watchQuery: ['id'],

  async asyncData (context: any) {
    const typeId = context.route.query.id

    const { data } = await context.$axios.$get(`/default/getArticleListByTypeId/${typeId}`)

    data.sort((a: any, b: any) => {
      return Date.parse(b.addTime) - Date.parse(a.addTime)
    })

    return { categoryList: data }
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
#category {
  margin-top: 2rem;

  .category-right {
    padding-left: 1rem;
  }
}
</style>
