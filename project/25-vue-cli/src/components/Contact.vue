<template>
    <div>
        <h2>Contact</h2>
        <button @click='backHome()'>Back Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        backHome () {
            this.$router.push('/')
        }
    }
}
</script>

