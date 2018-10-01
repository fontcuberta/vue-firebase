<template>
    <div>
        <h1>Counter: {{ quantity }}</h1>
        <button @click="increase">Increase</button>
        <button @click="reduce">Reduce</button>
    </div>
</template>
<script>
export default {
    methods: {
        increase() {
            //this.$emit('increase');
            this.$store.state.quantity++;
        },
        reduce() {
            //this.$emit('reduce');
            this.$store.state.quantity--;
        }
    },
    computed: {
        quantity () {
            return this.$store.state.quantity;
        }
    }
}
</script>
<style>

</style>

