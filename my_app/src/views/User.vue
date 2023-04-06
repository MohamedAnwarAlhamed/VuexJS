<template>
    <div>
        <h1>User</h1>
        <p>Counter: {{ count }}</p>
        <p>Name: {{ name }}</p>
        <button v-on:click="incremental">+</button>
        <button v-on:click="decremental">-</button>

        
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            <tr v-for="item in student" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
            </tr>
        </table>

        
    </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
export default {
    name: 'User',
    components: {},
    computed: mapState([
        'count',
        'name',
        'student'
    ]),
    methods: {
        incremental() {
            this.$store.state.count++
        },
        decremental() {
            this.$store.state.count--
        }
    }
}
</script>