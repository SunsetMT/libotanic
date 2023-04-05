import Vue from 'vue'
import Router from 'vue-router'

import Otdels from "@/components/body/Otdels";
import PlantPage from "@/components/body/PlantPage";
import SearchPage from "@/components/body/SearchPage";
import GardensList from "@/components/body/GardensList";

Vue.use(Router);


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'gardens',
            component: GardensList
        },
        {
            path: '/otdels/:garden_id',
            name: 'otdels',
            component: Otdels
        },
        {
            path: '/plant/:id',
            name: 'plant',
            component: PlantPage
        },
        {
            path: '/search',
            name: 'search',
            component: SearchPage
        }

    ]
})

export default router