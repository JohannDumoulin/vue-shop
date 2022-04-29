<script>
import ProductItem from './ProductItem.vue'
import { onBeforeMount, ref } from 'vue'
import useStore from './../js/store'

const toProductContainerRefs = refs => ({
    ...refs,
    productContainerRefs: {
        ...refs
    }
})

export default ({
    setup() {
        const { hydrateProducts, getProducts, getFilteredProducts, setFilteredProducts } = useStore().products()

        const isLoading = ref(false);
        const inputValue = ref('');

        onBeforeMount(() => {
            isLoading.value = true
            hydrateProducts().then(res => isLoading.value = false)
        })

        return {
            getProducts,
            getFilteredProducts,
            setFilteredProducts,
            ...toProductContainerRefs({
                isLoading,
                inputValue
            }),
        };
    },
    components: {
        ProductItem
    },
});

</script>

<template>
    <div v-if="isLoading"> Loading ... </div>
    <div v-else class="p-8">
        <input type="text"
               v-model="inputValue"
               @keyup="setFilteredProducts(productContainerRefs.inputValue)"
               placeholder="Rechercher"
               class="bg-gray-100 px-4 py-2 rounded-xl">

        <div class="p-8 flex flex-wrap">
            <ProductItem v-for="product in getFilteredProducts" :product="product"/>
        </div>
    </div>
</template>


