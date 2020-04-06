import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    this.$store.dispatch('queryToken');
    axios.interceptors.response.use(
      response => response,
      error => {
        if(error.response.status === 401){
          this.$route.push('/logout');
        }
        return Promise.reject(error);
      }
    )
  },
  render: function (h) { return h(App) }
}).$mount('#app')
