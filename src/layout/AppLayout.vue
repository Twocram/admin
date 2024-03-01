<template>
    <div class="flex h-screen p-5 bg-gray-100">
        <AppSidebar />
        <div class="w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppSidebar from './AppSidebar.vue';

</script>

<style scoped>

</style>