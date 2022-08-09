<script setup lang="ts">
import { ITodo } from "@/interface/todo";
import { ref, onMounted } from "vue";

const list = ref<ITodo[]>([
  {
    id: 1,
    title: "今天要吃1顿饭",
    checked: false,
  },
]);

const getTodoList = () => {
  return list.value;
};

const addTodo = () => {
  list.value.push({
    id: list.value.length + 1,
    title: `今天要吃${list.value.length + 1}顿饭`,
    checked: false,
  });
};

const deleteTodo = (index: number) => {
  list.value.splice(index, 1);
};

onMounted(() => {
  console.log("onMounted");
});
</script>

<template>
  <div :class="$style.todo_container">
    <div v-for="(item, index) in list" :key="item.id" :class="$style.todo_list">
      <div :class="$style.title">{{ index + 1 }}、{{ item.title }}</div>
      <div :class="$style.delete" @click="() => deleteTodo(index)">x</div>
    </div>
    <div :class="$style.add" @click="addTodo" type="primary">添加</div>
  </div>
</template>

<style module lang="scss">
.todo_container {
  box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  border-radius: 4px;
}

.todo_list {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  background: #fcfcfc;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;

  .title {
    font-size: 12px;
    color: #999;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.delete {
  box-sizing: border-box;
  width: 20px;
  height: 18px;
  border: 1px dashed #ccc;
  border-radius: 4px;
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  color: orange;
  cursor: pointer;
}
</style>
