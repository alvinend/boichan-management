<template>
  <button>Add Task</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    title: String
  }
})
</script>
