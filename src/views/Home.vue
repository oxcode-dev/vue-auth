<template>
  <Layout class="home">
    <main role="main">

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            <div class="col-md-8 offset-md-2">
              <ArticleCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/Layouts/Index.vue'
import ArticleCard from '@/components/Cards/ArticleCard'
import { isLogged} from '@/Helpers/index'
import { getEvents } from '@/Services/AuthService'

export default {
  name: 'Home',
  components: {
    Layout, ArticleCard
  },

  computed:{
    user(){
      return isLogged;
      // return User.getters.user;
    }
  },

  created(){
    getEvents()
  }
}
</script>
