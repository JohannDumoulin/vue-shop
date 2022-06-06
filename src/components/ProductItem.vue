<script setup lang="ts">
    defineProps<{ product: object }>()
</script>

<template>
    <div class="w-1/3 flex justify-center mb-16">
        <router-link
            class="block overflow-hidden group w-xs"
            :to="`/products/${product.id}`"
        >
            <div class="shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-3xl overflow-hidden">
                <img
                    class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]"
                    :src="product.image"
                    alt="Basic Tee Product"
                />
            </div>

            <div class="relative pt-4">
                <h3 class="text-sm group-hover:underline group-hover:underline-offset-4">
                    {{ product.title }}
                </h3>

                <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="font-medium tracking-wider">
        {{ product.price }} $
      </span>
                </p>
            </div>
        </router-link>
    </div>
</template>
