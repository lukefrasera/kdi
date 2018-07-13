<template>
  <div class="kdi">
    <h1>{{title}}</h1>
    <h2>Available Kernels</h2>
    <b-list-group>
      <b-list-group-item href="#" v-for="item in items" :key="item">{{item}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Kdi',
  props: {
    title: String
  },
  data() {
    return {
      items: [
        "Kernel: v4.17.4",
        "Kernel: v4.17.4",
        "Kernel: v4.17.4"
      ]
    }
  }
}
</script>

<style scoped>
</style>