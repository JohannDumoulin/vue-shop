import { ref, computed } from 'vue'
import fetchProducts from '../api/fetchProducts'

const state = ref({
    products: [],
    filteredProducts: []
})

export default () => {
    const getProducts = computed(() => state.value.products)

    const getFilteredProducts = computed(() => state.value.filteredProducts)

    const setFilteredProducts = string => {
        state.value.filteredProducts = state.value.products.filter(product => product.title.includes(string.value))
    }

    const hydrateProducts = () => fetchProducts().then((data) => {
        state.value.products = data
        state.value.filteredProducts = data
    })

    return {
        getProducts,
        getFilteredProducts,
        setFilteredProducts,
        hydrateProducts,
    }
};
