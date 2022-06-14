import { defineStore } from 'pinia'
import { toRaw } from 'vue'
import fetchProducts from '../api/fetchProducts'

export const useProducts = defineStore('main', {
    state: () => {
        return {
            isProductsLoaded: false,
            products: [],
            filteredProducts: [],
            categories: [],
        }
    },
    getters: {
        getProducts: (state) => state.products,
        getFilteredProducts: (state) => state.filteredProducts,
        getCategories: (state) => state.categories,
    },
    actions: {
        async hydrateProducts() {
            await fetchProducts().then((data) => {
                this.products = data
                this.filteredProducts = data
                this.isProductsLoaded = true
            })
        },

        setFilteredProducts(string) {
            this.filteredProducts = toRaw(this.products)
                .filter(product => product.title
                    .toLowerCase()
                    .includes(string))
        },
    }
});
