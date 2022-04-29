import { ref, computed } from 'vue'
import fetchCategories from '../api/fetchCategories'

const state = ref({
    categories: [],
})

export default () => {
    const getCategories = computed(() => state.value.categories)

    const hydrateCategories = () => fetchCategories().then((data) => {
        state.value.categories = data
    })

    return {
        getCategories,
        hydrateCategories,
    }
};
