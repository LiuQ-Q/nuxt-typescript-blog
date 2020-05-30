import Vue from 'vue'

const api = {
  install (Vue: any) {
    Vue.prototype.$api = {
      getArticleList () {
        return '123'
      }
    }
  }
}

Vue.use(api)
