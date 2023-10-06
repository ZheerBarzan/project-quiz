import { createRouter, createWebHistory } from "vue-router";
import Quizes from "../views/Quizes.vue"
import QuizView from "../views/QuizView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:"/",
            name: "quizes",
            component: Quizes
        },{
            path:"/quiz/:id",
            name: "quiz",
            component: QuizView

        }

    ]
})


export default router