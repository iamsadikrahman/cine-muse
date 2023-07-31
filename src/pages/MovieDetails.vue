<script setup>
import { onMounted, reactive, ref } from "vue";
import router from "../router/router.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

let queryMovie = reactive({});

let isLoading = ref(true);

onMounted(async () => {
  try {
    const data = await fetch(
      `https://demo-api-nine-rouge.vercel.app/movies/${parseInt(props.id)}`
    );

    if (data.status === 404) {
      await router.push({ name: "NotFound" });
    }
    queryMovie = await data.json();
    console.log(queryMovie);
    isLoading.value = false;
    console.log(data.status);
  } catch (error) {
    console.error(error);

    isLoading.value = false;
  }
});
</script>

<template>
  <div v-if="isLoading">is Loading</div>

  <div v-else class="flex flex-col justify-center items-center">
    <div class="flex flex-col text-center text-1xl">
      <h1>Movie Number {{ props.id }}</h1>
      <h5>{{ queryMovie.Title }}</h5>
      <h5>{{ queryMovie.Released }}</h5>
      <h5>{{ queryMovie.Runtime }}</h5>
      <h5>{{ queryMovie.Genre }}</h5>
      <h5>{{ queryMovie.Director }}</h5>
      <h5>{{ queryMovie.Actors }}</h5>
      <h5>{{ queryMovie.Plot }}</h5>
    </div>

    <div class="flex space-x-4 flex-wrap">
      <img v-for="image in queryMovie.Images" :src="image" alt="" class="w-[15%]" />
    </div>

    <button
      class="mt-5 border rounded bg-red-500 text-white text-bold px-5 py-2"
      @click="$router.back()"
    >
      Back
    </button>
  </div>
</template>

<style scoped></style>
