<template>
<p>Par ici c'est la home</p>
    <router-link to="/products">Voir les produits</router-link>
</template>

<script>
export default {
    computed: {
        username() {
            // We will see what `params` is shortly
            return this.$route.params.username
        },
    },
    methods: {
        goToDashboard() {
            if (isAuthenticated) {
                this.$router.push('/dashboard')
            } else {
                this.$router.push('/login')
            }
        },
    },
}
</script>

<style scoped>

</style>
