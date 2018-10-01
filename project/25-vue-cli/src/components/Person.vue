<template>
    <div>
        <template v-if='person'>
            <h1 v-text="personData.name"></h1>
            <h2 v-text="personData.email"></h2>
            <img :src="personData.picture">
        </template>
        <slot v-else> Loading person... </slot>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        mounted() {
            axios.get('https://randomuser.me/api/').then((response) => {
                this.person = response.data.results[0];
            })
        },     
        data() {
            return {
                person: null,
            }
        },
        computed: {
            personData() {
                return {
                    name: `${this.person.name.first} ${this.person.name.last}`,
                    picture: this.person.picture.large,
                    email: this.person.email
                }



            }

        }
    }
</script>


<style>

</style>


