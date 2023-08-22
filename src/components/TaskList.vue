<script setup lang="ts">
import { ref } from "vue";
const taskName = ref("");
const taskList = ref<string[]>([]);

const onSubmit = () => {
  taskList.value.push(taskName.value);
  taskName.value = "";
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="task-name">hihi</label>
      <input type="text" id="task-name" v-model="taskName" />
      <button type="submit">submit</button>
      <ul>
        <li v-for="task in taskList" :key="task">{{ task }}</li>
      </ul>
    </div>
  </form>
</template>
