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
        state.value.filteredProducts = state.value.products
            .filter(product => product.title
                .toLowerCase()
                .includes(string.value.toLowerCase()))
    }

    const hydrateProducts = () => fetchProducts().then((data) => {
        state.value.products = data
        state.value.filteredProducts = data
    })

    const getProduct = (id) => {
        if (Object.keys(state.value.products).length === 0) hydrateProducts().then(() => {
            console.log(state.value.products);
        });
    }

    return {
        getProducts,
        getFilteredProducts,
        setFilteredProducts,
        hydrateProducts,
        getProduct
    }
};
