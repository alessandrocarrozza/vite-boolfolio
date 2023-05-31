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
    </div>
</template>

<style lang="scss"></style>