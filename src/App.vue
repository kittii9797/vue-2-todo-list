<template>
  <div id="app">
    <task v-bind:list="list"></task>
  </div>
</template>

<script>
import Task from "./components/Task";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
export default {
     name: "App",
  components: {
    Task,
    },
    data(){
        return{
            list: undefined,
        }
    },
    methods:{
      getData(){
      this.axios.get('https://dev.dreamjo.bs/api/items').then((result)=>{
      console.warn(result)
      this.list=result.data
      })
      },
    },
    mounted(){
        /*Vue.axios.get('https://dev.dreamjo.bs/api/items')
        .then((resp)=>{
            this.list=resp.data
            console.warn(resp.data)
        })*/
        this.getData()
    }
    
};
</script>

