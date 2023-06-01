<script>
import axios from 'axios';
import { store } from "../store.js";

export default {
    name: "SingleProject",
    data() {
        return {
            store,
            project: "",
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.baseUrl}/api/projects/${slug}`)
            .then(response => {
                this.project = response.data.project;
            });
    }
}
</script>

<template>
    <h1>{{ project.title }}</h1>
    <h4>{{ project.slug }}</h4>
    <p>{{ project.content }}</p>
</template>

<style lang="scss"></style>