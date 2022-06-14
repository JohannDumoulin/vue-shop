<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'

import ProductItem from './ProductItem.vue'
import Loader from './Loader.vue'

import { useProducts } from '../js/productsStore'
import { useCategories } from '../js/categoriesStore'

const productStore = useProducts()
const { isProductsLoaded, filteredProducts } = storeToRefs(productStore)
const { hydrateProducts, setFilteredProducts } = productStore

const categoriesStore = useCategories()
const { isCategoriesLoaded, categories } = storeToRefs(categoriesStore)
const { hydrateCategories } = categoriesStore

const inputValue = ref('');

onBeforeMount(() => {
    if (!isProductsLoaded.value) hydrateProducts()
    if (!isCategoriesLoaded.value) hydrateCategories()
})

</script>

<template>
    <div v-if="isProductsLoaded && isCategoriesLoaded" class="p-8">
        <input type="text"
               v-model="inputValue"
               @keyup="setFilteredProducts(inputValue)"
               placeholder="Rechercher"
               class="bg-gray-100 px-4 py-2 rounded-xl magneticEffect">

        <div class="p-8 flex flex-wrap">
            <ProductItem v-for="product in filteredProducts" :product="product"/>
        </div>
    </div>
    <Loader v-else />
</template>
