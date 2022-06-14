import { defineStore } from 'pinia'
import fetchCategories from '../api/fetchCategories'

export const useCategories = defineStore('categories', {
    state: () => {
        return {
            isCategoriesLoaded: false,
            categories: [],
        }
    },
    getters: {
        getCategories: (state) => state.categories,
    },
    actions: {
        async hydrateCategories() {
            fetchCategories().then((data) => {
                this.categories = data
                this.isCategoriesLoaded = true
            })
        },
    }
});

