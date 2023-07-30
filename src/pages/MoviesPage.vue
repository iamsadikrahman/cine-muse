<script setup>

import {onMounted, reactive, ref} from "vue";
import MovieCard from "../components/MovieCard.vue";
import axios from "axios";

let movieList = reactive([])

let isLoading = ref(true)


onMounted(async ()=>{
  try {
    const {data} = await axios.get('https://demo-api-nine-rouge.vercel.app/movies')
    movieList = data
    console.log(movieList)
    isLoading.value = false
  }
  catch (err){
    console.error(err)
    isLoading.value = false

  }
})

</script>

<template>
  <section>
    <h1 class="text-5xl text-red-500 text-center py-10">Top Movies List in 2023</h1>

    <div v-if="isLoading">Loading</div>


    <div v-else class="flex flex-col justify-center items-center space-y-5">
      <MovieCard v-for="(movie, index) in movieList" :key="index" :movie="movie"></MovieCard>
    </div>
  </section>
</template>

<style scoped>

</style>