<template>
    <div>
        <RouterLink :to="data.path">{{ data.name }}</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { IMenuItem } from "@/interface/IMenuItem.ts"
const data = defineProps<IMenuItem>();

</script>