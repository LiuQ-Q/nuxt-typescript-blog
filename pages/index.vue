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
  }
})

export default class Index extends Vue {
  articleList: Object[] = [
    {
      title: '算法与分析',
      date: '2020-02-02',
      type: '学习总结',
      viewCount: '22',
      image: 'http://images.liu7.xyz/dataStructure.jpg',
      introduce: '2222222222222222222222222222222222222222222222222222222222222222222'
    }
  ]
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
