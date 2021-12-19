<template>
  <li class="todo-list list">
    <label class="material-checkbox">
            <input type="checkbox" v-model="item.completed" @click.self="$emit('complete')">
            <span></span>
          </label>
          <div>
          <div class="text" :class="className">{{ item.name }}</div>
          <!-- <div style="display:block;font-size:10px;margin.top:5px">Update: {{ item.updatedAt }}</div> -->
          </div>
          <div class="space" style="margin-right:15px"></div>
    <button @click="$emit('edit')" style="margin-right:15px"><i class="far fa-edit"></i></button>
    <button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["item"],
  computed: {
    className() {
      let classes = ['toggle'];
      if(this.item.completed) {
        classes.push('toggle-completed');
      }
      return classes.join(' ');
    }
  }, 
};
</script>

