<template>
  <div>
    <h1>Routes with Vue-Router</h1>
    <router-link to="/" active-class="active-menu" exact>Home</router-link>
    <router-link to="/contact" active-class="active-menu" exact>Contact</router-link>
    <router-link to="/user/77" active-class="active-menu" exact>User</router-link>
    <router-link to="/user/99" active-class="active-menu" exact>User99</router-link>

    <hr>
    <router-view></router-view>
    <person></person> 
    <task></task>
    <counter :quantity="quantity" 
              @increase="quantity++"
              @reduce="quantity--">
          
          </counter>
  </div>
</template>

<script>
import person from './components/Person.vue';
import task from './components/Task.vue';
import counter from './components/Counter.vue'
export default {
  name: 'app',
  components: {person, task, counter},
  data () {
    return {
      quantity: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active-menu {
  color: #7844aa;
  text-decoration: none;
}

a {
  color: #00aabb;
  text-decoration: none;
}

</style>
