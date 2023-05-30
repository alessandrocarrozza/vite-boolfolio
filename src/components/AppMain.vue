<script>
import axios from "axios";
export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
            baseUrl: "http://localhost:8000",
        }
    },
    methods: {
        getProjects() {
            console.log("hello");

            axios.get(`${this.baseUrl}/api/projects`)
                .then(response => {
                    this.projects = response.data.results;
                    console.log(response);
                });
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="project in projects" class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ project.slug }}</h6>
                    <p class="card-text">{{ project.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>