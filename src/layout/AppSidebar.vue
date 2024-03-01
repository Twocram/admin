<template>
    <Card class="sidebar w-96 p-5 h-full flex flex-col justify-between mr-8">
        <template #content>
            <div v-for="item in menuItems" :key="item.to"
                class="hover:bg-slate-100 hover:rounded-lg cursor-pointer p-2 mb-2" :class="{
                    'bg-slate-100 text-blue-400 rounded-lg': item.to === router.currentRoute.value.path,
                }" @click="goToRoute(item.to)">
                {{ item.label }}
            </div>
        </template>

        <template #footer>
            <Button class="p-2 self-end hover:bg-blue-700 bg-blue-500 text-white w-full" label="Logout" />
        </template>
    </Card>
</template>


<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import { useRouter } from "vue-router";

type MenuItem = {
    label: string;
    to: string;
};

const router = useRouter();

const goToRoute = async (to: string) => {
    await router.push(to);
};

const menuItems: MenuItem[] = [
    {
        label: "Users",
        to: "/",
    },
    {
        label: "Lots",
        to: "/lots",
    },
    {
        label: "Transactions",
        to: "/transactions",
    },
];
</script>

<style>
.sidebar > .p-card-body {
    height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
