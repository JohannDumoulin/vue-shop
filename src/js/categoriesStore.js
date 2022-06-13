import { defineStore } from 'pinia'
import fetchCategories from '../api/fetchCategories'

export const useCategories = defineStore('categories', {
    state: () => {
        return {
            categories: [],
        }
    },
    getters: {
        getCategories: (state) => state.categories,
    },
    actions: {
        hydrateCategories() {
            fetchCategories().then((data) => {
                this.categories = data
            })
        },
    }
});

