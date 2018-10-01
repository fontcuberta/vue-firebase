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
export default {
    data () {
        return {
            tasks: [
                {name: "Find Nemo", completed: false},
                {name: "The Little Mermaid", completed: true},
                {name: "Monsters Inc", completed: false},
                {name: "The Incredibles", completed: false},
            ],
            completed: []
        }
    },
    methods: {
        updateTask(task) {
            task.completed = !task.completed;
        }
    },
    computed: {
        tasksUnfinished () {
            return this.tasks.filter((task) => !task.completed);
        },
        tasksFinished () {
            return this.tasks.filter((task) => task.completed);
        },

    }
}
</script>

<style scoped>

li a {
    color: #ab0077;
    font-weight: bold;
    text-decoration: none;
}


</style>

