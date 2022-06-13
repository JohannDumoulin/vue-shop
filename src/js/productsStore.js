import { defineStore } from 'pinia'
import { toRaw } from 'vue'
import fetchProducts from '../api/fetchProducts'

export const useProducts = defineStore('products', {
    state: () => {
        return {
            products: [],
            filteredProducts: [],
            isLoaded: false
        }
    },
    getters: {
        getProducts: (state) => state.products,
        getFilteredProducts: (state) => state.filteredProducts,
        getProductsById: (state) => {
            return (productId) => state.products.find((product) => product.id === productId)
        }
    },
    actions: {
        hydrateProducts() {
            fetchProducts().then((data) => {
                this.products = data
                this.filteredProducts = data
                this.isLoaded = true
            })
        },

        setFilteredProducts(string) {
            this.filteredProducts = toRaw(this.products)
                .filter(product => product.title
                    .toLowerCase()
                    .includes(string))
        },

        // getProduct(id) {
        //     if (Object.keys(this.products).length === 0) this.hydrateProducts().then(() => {
        //         console.log(this.products);
        //     });
        // }
    }
});
