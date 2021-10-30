<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
import { defineComponent } from "vue";

  export default defineComponent({
    name: 'Header',
    props: {
      title: String
    }
  })
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>