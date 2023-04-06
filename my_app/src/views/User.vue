<template>
  <div>
    <h1>User</h1>
    <p>Counter: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
    <p>Double Counter: {{ doublecount }}</p>

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
import { mapState } from "vuex";
export default {
  name: "User",
  components: {},
  computed: {
    countA() {
      return this.$store.state.A.count;
    },
    doublecount() {
      return this.$store.getters.A.doublecount(4);
    },
  },
  methods: {
    increment() {
      return this.$store.A.dispatch("increment_M", 4);
    },
    decrement() {
      return this.$store.A.dispatch("decrement_M", 5);
    },
    incremental() {
      this.$store.state.A.count++;
    },
    decremental() {
      this.$store.state.A.count--;
    },
  },
};
</script>