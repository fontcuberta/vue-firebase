import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        quantity: 0,
        tasks: [
            {name: "Find Nemo", completed: false},
            {name: "The Little Mermaid", completed: true},
            {name: "Monsters Inc", completed: false},
            {name: "The Incredibles", completed: false},
        ],
    },
    getters: {
        tasksUnfinished: (state) => {
            return state.tasks.filter((task) => !task.completed);
        },
        tasksFinished: (state)  =>  {
            return state.tasks.filter((task) => task.completed);
        },
    }
});