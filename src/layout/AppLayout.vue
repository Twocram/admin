<template>
    <div class="flex flex-col min-h-screen p-5 bg-gray-100">
        <AppHeader />

        <div class="flex h-full">
            <AppSidebar />
            <div class="w-full">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';

</script>

<style scoped></style>