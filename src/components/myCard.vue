<script>

export default {
    name: "MyCard",
    props: {
        title: String,
        slug: String,
        content: String,
    }
}
</script>

<template>
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ slug }}</h6>
        <p class="card-text">{{ content }}</p>

        <router-link :to="{ name: 'single-project', params: { slug: slug } }" class="btn btn-primary">
            Vedi progetto
        </router-link>
    </div>
</template>

<style lang="scss"></style>