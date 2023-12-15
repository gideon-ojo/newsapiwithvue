<template>
  <div class="container-fluid">
    <div class="row">
     <Parallax/>
      <div
        class="col-lg-3 col-xl-3 col-md-4 col-sm-12 mt-2"
        v-for="sportnew in sportnews"
        :key="sportnew.articles"
      >
        <div class="bg-light position-relative h-100  mb-3">
          <img v-if="sportnew.urlToImage" :src="sportnew.urlToImage" class="w-100 mb-4 h-25" alt="" />
          <img v-else src="../assets/img/bimager.avif" class="w-100" alt="">
          <div class="p-2 ">
            <p class="text-dark text-uppercase fs-6 fw-bold">
              <!-- <b class="text-danger">By</b> {{ newsAuthor}} -->
            </p>
            <p class="text-dark fs-6 fw-bold mt-0">{{ sportnew.title }}</p>
              <p class="text-primary  fw-bold w-75">{{ sportnew.publishedAt}}</p> 
              <p class="text-dark w-100 pb-3">{{ sportnew.description}}</p> 
            <!--  <p class="text-dark w-75">{{ sportnew.content}}</p> -->
            <a
              :to="{ name: 'contentFull' }"
              class="text-decoration-none bg-danger p-2 text-white position-absolute bottom-0 mb-2 mt-5 rounded-2"
              :href="sportnew.url"
              target="_blank"
              rel="noopener noreferrer"
              >Read more</a
            >
          </div>
        </div>
      </div>
    </div>
  
    <!-- <pre>{{ sportnews }}</pre> -->
  </div>
</template>

<script setup>
/* import { useSetup } from 'vue' */
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import Parallax from "../components/Parallax.vue";
const sportnews = ref({});
const sportnew = ref([]);
const newsAuthor = ref([])
const generalImg = ref(`<img src="../assets/img/newss.jpg"/>`)

computed(() => {
  if(!sportnew.urlToImage){
    return generalImg
  }
})
onMounted(() => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=03436138bcba4214a89cb998aebe798a`
    )
    .then((responce) => {
     /*  console.warn(responce.data.articles); */
      sportnews.value = responce.data.articles;
      const newsAuthor = responce.data.articles.author;
       /* console.log(newsAuthor) */
    });
 
   
});


</script>
