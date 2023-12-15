<template>
  <div class="overflow-hidden">
    <navbar
      @displaySearchContent.enter="displaySearchContent($event)"
      class="mb-5"
    /> 
    
  <!--   <Searchquery  
    :data = data /> -->
    
    
    <main ref="noDisplay" class="mt-5 w-100" >
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import axios from "axios";
 

import { onMounted, onUnmounted, ref, onBeforeUnmount, computed  } from "vue";
import { useRouter } from 'vue-router';
/* const query = ref(""); */
const data = ref({});
const router = useRouter();



// const displaySearchContent = async (query) => {
 // const response = await axios.get(
  //  `https://newsapi.org/v2/everything?q=${query.value}&apiKey=03436138bcba4214a89cb998aebe798a`,
  //  {
  //    method: "GET",
  //  }
 // );
 // data.value = await response.data.articles;
  /* console.log(data) */
  //query.value = data.filter((eventData) => {
  //  if (query === "") {
     /*  console.log(eventData) */
   //   return eventData;
  //  } else if (
  //    eventData.description.toLowerCase().includes(query.value.toLowerCase())
   //   ) {
   //     query.value = "";
   //     return eventData;
    //    }
   //     $router.push({path: '/search', query: { q: query } })
 // });
  
//};
const handleScroll = (to, from, savedPosition) => {
  if (savedPosition) {
    // If a savedPosition is available, use it
    return savedPosition;
  } else if (to.hash) {
    // If the route has a hash (e.g., #section), scroll to the element with that id
    return { el: to.hash };
  } else {
    // Scroll to the top by default
    return { top: 0 };
  }
}; 
/* const news = computed(() => Store.state.displaySearchedContent)
function displaySearchContent(){
  Store.dispatch('displaySearchContent',query.value)
} */

// Lifecycle hook: runs when the component is mounted
onMounted(() => {
  // Set up the scrollBehavior when the component is mounted
  router.options.scrollBehavior = handleScroll;
});

// Lifecycle hook: runs before the component is unmounted
onBeforeUnmount(() => {
  // Reset the scrollBehavior when the component is about to be unmounted
  router.options.scrollBehavior = null;
});
//const updateSearchQuer = () => {
   // Update the route query parameter
  // router.push({ query: { q: query.value } });
  // Perform search and update searchResults (you need to implement this logic)
//  performSearch();
//};

// Function to perform the search (replace this with your actual search logic)
//const updateSearchQuery = () => {
  // Simulate search results
 // query.value = ['Result 1', 'Result 2', 'Result 3'];
//};

// Lifecycle hook: runs when the component is mounted

//onMounted(() => {

  // Check if there is a search query in the initial route and update the component state
  //if (router.currentRoute.value.query.q) {
 //   query.value = router.currentRoute.value.query.q;
  //  performSearch();
 // }
//});
// Function to handle the scroll event and update parallaxValue
const handleSccroll = () =>{
  parrallaxValue.value = window.scrollY
}
// Lifecycle hook: runs when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleSccroll)
})
// Cleanup the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleSccroll)
})
</script> 

<style scoped>
body {
  /* Set the background and adjust other styles as needed */
  background-image: url('../assets/img/bimager.avif');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: url('../assets/img/newss.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
*{
  box-sizing: border-box;
}
.display {
  display: none;
}
#searchResult{
  /* margin-top: 56px !important; */
}
section{
  margin-top: 20px;
}
p {
  background: linear-gradient(45deg, #f09, #1f6);
-webkit-background-clip: text;
  color: transparent;
  font-weight: bolder;
}
@media (max-width: 992px) {
  main {
    margin-top: 58px !important;
  }
}
</style>
