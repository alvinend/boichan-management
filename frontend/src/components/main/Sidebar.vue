<style lang="scss" scoped>
  .sidebar-container {
    height: 100vh;
    padding: 20px 30px;
    background-color: white;
  }
</style>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar"
})
</script>

<template>
  <div class="sidebar-container">
    <v-icon name="user"></v-icon>
    <custom-icon name="activity" base-class="custom-icon"></custom-icon>
  </div>
</template>