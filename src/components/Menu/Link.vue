<template>
    <div>
        <RouterLink :to="path">{{ name }}</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { IMenuItem } from "@/interface/IMenuItem.ts"

const { name, path } = defineProps<IMenuItem>();
</script>
