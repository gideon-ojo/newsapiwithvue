<template class="w-100">
  <nav
    class="navbar navbar-expand-lg bg-primary d-flex w-100 mb-0 p-1 position-fixed top-0"
    style="z-index: 1"
  >
    <div
      class="d-flex mx-auto justify-content-around  bg-white-subtle"
    >
      <h1 class="navbar-brand text-light fs-4 fw-bold">
        CODE<span class="text-danger">MASTER</span>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <div
          @click="togglee"
          class="d-flex justify-content-center outline-none"
        >
          <span
            v-if="showbutton"
            @click="showDropdowns"
            class="navbar-toggler-icon d-block my-2"
            id="none"
          ></span>
          <span
            v-else
            @click="hideDropdowns"
            class="fs-5 fw-bolder d-inline-block my-2"
            >X</span
          >
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5" id="hide">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link text-white fs-6 fw-bold"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'entertainmentnews' }"
              class="nav-link text-white fs-6 fw-bold"
              >Entertainment</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'technews' }"
              class="nav-link text-white fs-6 fw-bold"
              aria-disabled=""
              >Tech</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'sportnews' }"
              class="nav-link text-white fs-6 fw-bold"
              >Sport</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'businessnews' }"
              class="nav-link text-white fs-6 fw-bold"
              >Business</router-link
            >
          </li>
        </ul>
       <!--  <form class="d-flex" @submit.prevent="getData">
          <input
            class="form-control me-2"
            v-model="query"
            
            type="search"
            placeholder="Search News..."
            aria-label="Search"
          />

      <input
            type="submit"
            @click="$emit('displaySearchContent', query)"
            class="btn bg-danger text-white"
            value="search"
           
          />
        </form> -->
        <Searchquery />
      </div>
    </div>
  </nav>
</template>

<script setup>
import axios from "axios";
import Searchquery from "./Searchquery.vue";
import { onMounted, ref, defineProps } from "vue";
const showbutton = ref(true);
const query = ref("");
let queryValue = query.value;

/* console.log(queryValue); */
let navContent = ref(false);

const showDropdowns = () => {
  const navba = document.getElementById("navbarTogglerDemo02");
  navba.style.display = "block";
  showbutton.value = false;
};
const hideDropdowns = () => {
  const navba = document.getElementById("navbarTogglerDemo02");
  navba.style.display = "none";
  showbutton.value = true;
};
</script>
<style scoped>
.active {
  display: block;
}
.nav-link {
  transition: all 3s;
  position: relative;
}
/* .nav-link:hover::after {
  content: "";
  height: 2px;
  width: 100%;
  color: grey;
  position: absolute;
  bottom: 0;
  left: 0;
} */
a:hover{
  color: black;
}
</style>
