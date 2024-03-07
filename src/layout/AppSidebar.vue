<template>
    <Card class="sidebar w-96 sticky top-8 p-5 h-full flex flex-col justify-between mr-8">
        <template #content>
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <span class="text-xl font-semibold mb-4">Admin</span>
                    <ul class="pl-4">
                        <li v-for="item in menuItems" :key="item.to"
                            class="hover:bg-slate-100 hover:rounded-lg flex items-center cursor-pointer p-2 mb-2" :class="{
                                'bg-slate-100 text-blue-400 rounded-lg': item.to === router.currentRoute.value.path,
                            }" @click="goToRoute(item.to)">
                            <span class="pi mr-2" :class="[
                                { 'pi-user': item.label === 'Users' },
                                { 'pi-box': item.label === 'Lots' },
                                { 'pi-money-bill': item.label === 'Transactions' },
                                { 'pi-chart-line': item.label === 'Dashboard'}
                            ]"></span>{{ item.label }}
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </Card>
</template>


<script setup lang="ts">
import Card from "primevue/card";
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
    {
        label: "Dashboard",
        to: "/dashboard",
    }
];
</script>

<style>
.sidebar>.p-card-body {
    height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
