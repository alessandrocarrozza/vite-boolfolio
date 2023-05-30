<script>
import axios from "axios";
export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProjects() {
            console.log("hello");

            axios.get("http://localhost:8000/api/projects")
                .then(response => {
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
        <div class="row"></div>
    </div>
</template>

<style lang="scss"></style>