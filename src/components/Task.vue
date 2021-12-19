<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1> To Do List</h1>
      </div>

      <!-- form -->
      <div class="form">
        <input
          type="text"
          placeholder="New Task"
          v-model="item"
          @keyup.enter="addTask"
        />
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>
     
     
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <task-item
            v-bind:item="item"
            v-for="(item, index) in list"
            :key="item.id"
            @remove="removeTask(index)"
            @edit="editTask(index)"
            @complete="completeTask(item)"
          ></task-item>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clearAll">Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incomplete }}</span>
      </div>
    </div> 
  </div>
</template>

<script>
import TaskItem from "./Task-item";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)

const STORAGE_KEY = 'vue-todo-app-storage'

export default {
  name: "Task",
  props: ['list'],
  components: {
    TaskItem,
  },
  data() {
    return {
      item: "",
      editedTask: null,
    };
  },
  created(){
    this.list= JSON.parse(localStorage.getItem(STORAGE_KEY) || 'https://dev.dreamjo.bs/api/items')
  },
  computed: {
    incomplete() {
      return this.list.filter(this.inProgress).length;
    },

  },
  methods: {
/*-------------API-------------*/

/*--------------------------*/

    addTask() {
     /* if (this.newTask) {
        this.list.push({
          name: this.newTask,
          completed: false,
          editing: false
        });
      }else if (this.editedTask != null) {
        this.list[this.editedTask].name = this.item;
        this.editedTask = null;
      }
      this.newTask = "";*/

      if (this.item.length === 0) return;

      /* We need to update the task */
      if (this.editedTask != null) {
        this.list[this.editedTask].name = this.item;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.list.push({
          name: this.item,
          completed: false,
        });
      }

      this.item = "";

      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list))

    },
    inProgress(item) {
      return !this.isCompleted(item);
    },
    isCompleted(item) {
      return item.completed;
    },
    clearCompleted() {
      this.list = this.list.filter(this.inProgress);
    },
    clearAll() {
      this.list = [];
    },
    completeTask(item) {
      item.completed = !item.completed;
    },
    editTask(index){
     this.item = this.list[index].name;
      this.editedTask = index;
    },
    removeTask(index) {
      this.list.splice(index, 1);
      /*this.axios.delete('https://dev.dreamjo.bs/api/items'+id).then(()=>{
      this.getData();})*/
    },
  },
};
</script>


