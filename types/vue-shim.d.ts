import Vue from 'vue'
import axios from 'axios'

declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}
// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    $axios: any
  }
}