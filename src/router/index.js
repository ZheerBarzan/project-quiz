import { createRouter, createWebHistory } from "vue-router";
import Quizes from "../views/Quizes.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:"/",
            name: "quizes",
            component: Quizes
        }

    ]
})


export default router