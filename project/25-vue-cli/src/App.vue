<template>
  <div>
    <person></person> 
    <task></task>
  </div>
</template>

<script>
import person from './components/Person.vue';
import task from './components/Task.vue';
export default {
  name: 'app',
  components: {person, task},
  data () {
    return {}
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

</style>
