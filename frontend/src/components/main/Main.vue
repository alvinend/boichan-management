<style lang="scss" scoped>
  .main-container {
    display: flex;
    background-color: #F0F2F6;
  }
</style>


<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
components: { Sidebar },
  name: "Main",
});
</script>

<template>
  <div class="main-container">
    <Sidebar></Sidebar>
    <div>MAINAA</div>
  </div>
</template>