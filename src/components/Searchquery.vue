<template>
  <form class="d-flex" @submit.prevent="search">
   
    <button type="submit" class="btn bg-danger text-light custom-hover"><b>Search</b></button>
  </form>

  <ul>
    <li v-for="result in searchResults" :key="result.articles">
      <div>{{ result.author }}</div>
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import router from "../router";

const Searchquery = ref("");
const searchResults = ref([]);
const route = useRouter();

const search = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${Searchquery.value}&apiKey=03436138bcba4214a89cb998aebe798a`);
    searchResults.value = response.data.articles;

    // update URL with search query
/*     router.push({ path: route.path, query: { q: Searchquery.value } }); */
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.custom-hover:hover{
   background-color: whitesmoke;
}
</style>
