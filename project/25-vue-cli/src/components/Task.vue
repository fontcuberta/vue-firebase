<template>
<div>
    <h1>Unfinished Tasks:</h1>
    <ul>
        <li v-for="task in tasksUnfinished">
            <a href="#" @click= "updateTask(task)" v-text="task.name"></a>
        </li>
    </ul>
        <h1>Finished Tasks:</h1>
    <ul>
        <li v-for="task in tasksFinished">
            <a href="#" @click= "updateTask(task)" v-text="task.name"></a>
        </li>
    </ul>

</div>
    
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            completed: []
        }
    },
    methods: {
        updateTask(task) {
            task.completed = !task.completed;
        }
    },
    computed: mapGetters(['tasksUnfinished', 'tasksFinished'])
}
</script>

<style scoped>

li a {
    color: #ab0077;
    font-weight: bold;
    text-decoration: none;
}


</style>

