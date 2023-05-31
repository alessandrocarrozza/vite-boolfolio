<script>
import { store } from "../store.js";
import MyCard from "../components/MyCard.vue";
import axios from "axios";
export default {
    name: "AppMain",
    components: {
        MyCard,
    },
    data() {
        return {
            projects: [],
            store,
        }
    },
    methods: {
        getProjects() {
            console.log("hello");

            axios.get(`${this.store.baseUrl}/api/projects`)
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
            <div class="card" style="width: 18rem;" v-for="project in projects">
                <MyCard :title="project.title" :slug="project.slug" :content="project.content"></MyCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>