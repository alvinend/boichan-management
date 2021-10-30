<style lang="scss" scoped>
  .main-container {
    display: flex;
    background-color: #F0F2F6;
  }
</style>


<script lang="ts">
import { defineComponent } from "vue";
import MyTask from "./MyTask.vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
components: { Sidebar, MyTask },
  name: "Main",
});
</script>

<template>
  <div class="main-container">
    <Sidebar></Sidebar>
    <MyTask></MyTask>
  </div>
</template>