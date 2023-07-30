<script setup>

import {onMounted, reactive, ref} from "vue";
import router from "../router/router.js";

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

let queryMovie = reactive({})

let isLoading =ref(true)


onMounted(async ()=>{
  try {
    const data = await fetch(`https://demo-api-nine-rouge.vercel.app/movies/${parseInt(props.id)}`)

    if(data.status === 404) {
      await router.push({name: 'NotFound'})
    }
    queryMovie = await data.json()
    console.log(queryMovie)
    isLoading.value = false
    console.log(data.status)
  } catch (error){

      console.error(error)

    isLoading.value = false
  }
})

</script>

<template>
<div v-if="isLoading">
  is Loading
</div>

  <div v-else>
    <h1>Movie Page Details {{props.id}}</h1>
    <h1>{{queryMovie.Title}}</h1>

    <div class="flex space-x-4 flex-wrap">

      <img v-for="image in queryMovie.Images" :src="image" alt="" class=" w-4/12">
    </div>

    <button @click="$router.back()">Back</button>
  </div>
</template>

<style scoped>

</style>