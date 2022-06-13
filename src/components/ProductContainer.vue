<script setup>
import { storeToRefs } from 'pinia'
import ProductItem from './ProductItem.vue'
import { onBeforeMount, ref } from 'vue'
import { useProducts } from '../js/productsStore'
import { useCategories } from '../js/categoriesStore'

const productStore = useProducts()
const { isLoaded, filteredProducts } = storeToRefs(productStore)
const { hydrateProducts, setFilteredProducts } = productStore

const categoriesStore = useCategories()
const { categories } = storeToRefs(categoriesStore)
const { hydrateCategories } = categoriesStore

const inputValue = ref('');

onBeforeMount(() => {
    if (isLoaded.value) return
    hydrateProducts()
    hydrateCategories()
})

</script>

<template>
    <div v-if="isLoaded" class="p-8">
        <input type="text"
               v-model="inputValue"
               @keyup="setFilteredProducts(inputValue)"
               placeholder="Rechercher"
               class="bg-gray-100 px-4 py-2 rounded-xl magneticEffect">

        <div class="p-8 flex flex-wrap">
            <ProductItem v-for="product in filteredProducts" :product="product"/>
        </div>
    </div>
    <div v-else> Loading ... </div>
</template>


