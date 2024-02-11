<template>
    <div>
        <MenuItem 
            v-for="route in RouterViews" 
            :name="route.name" 
            :path="route.path" 
            :key="route.name"
        ></MenuItem>
    </div>
    <!-- <div>
        <Link v-for="route in RouterViews" :name="route.name" :path="route.path" :key="route.name" />
    </div> -->
    <!-- <div>
        <Link v-for="(route, index) in RouterViews" v-if="index % 2 === 0" :name="route.name" :path="route.path" :key="route.name" />
        <RootLink />
    </div> -->
</template>
<script setup lang="ts">
import router from '@/router/index';
import MenuItem from './Menultem.vue';
import type {IMenuItem} from "@/interface/IMenuItem"
import RootLink from '@/components/Menu/RootLink.vue';
import Link from '@/components/Menu/Link.vue';


const RouterViews = router.options.routes.filter(route=>{
    return route;
}) as IMenuItem[]


</script>