<script setup lang="ts">
const props = defineProps(['path'])
</script>

<template>
    <nav aria-label="Breadcrumb" class="my-8">
        <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
            <li>
                <router-link class="block transition-colors hover:text-gray-700" to="/">
                    <span class="sr-only"> Home </span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </router-link>
            </li>

            <li class="flex items-center" v-for="(step, index) in path">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>

                <router-link v-if="index < path.length - 1" class="block transition-colors hover:text-gray-700 ml-1" :to="step.path">{{ step.name }}</router-link>
                <p v-else class="block transition-colors ml-1">{{ step.name }}</p>
            </li>
        </ol>
    </nav>
</template>

<style scoped>

</style>
