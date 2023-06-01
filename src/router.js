import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppContact from "./pages/AppContact.vue";
import AppMain from "./pages/AppMain.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                name: "home",
                component: AppHome
            },
            {
                path: "/contattaci",
                name: "contact",
                component: AppContact
            },
            {
                path: "/blog",
                name: "projects",
                component: AppMain
            },
            {
                path: "/blog/:slug",
                name: "single-project",
                component: SingleProject
            },
        ]
    }
);

export { router };