<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import ProductContainer from './components/ProductContainer.vue'
import instance from './js/store'
import { onBeforeMount, onMounted } from "vue";

// onBeforeMount(() => {
//     instance.fetchProducts()
// })
//
// onMounted(() => {
//     console.log(instance.getProducts());
// })

</script>

<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
  <ProductContainer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
