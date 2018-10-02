<template>
    <div>
        <h1>Counter: {{ quantity }}</h1>
        <button @click="increaseAsync">Increase</button>
        <button @click="reduceAsync">Reduce</button>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    computed: mapState(['quantity']),
    //methods: mapMutations(['increase', 'reduce'])
    methods: mapActions(['increaseAsync', 'reduceAsync'])
//     methods: {
//         increase() {
//             this.$store.dispatch('increaseAsync');
//         },
//         reduce() {
//             this.$store.dispatch('reduceAsync');
//         }
//     }
}
</script>
<style>

</style>

