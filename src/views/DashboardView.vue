<template>
    <div class="flex flex-col">
        <div class="flex mb-6">
            <Card class="mr-5">
                <template #content>
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-lg font-semibold text-gray-500">Tickets</span>
                                <div class="bg-red-300 h-fit flex items-center p-2 rounded-lg">
                                    <span class="text-red-800 pi pi-ticket"></span>
                                </div>
                            </div>
                            <span class="font-semibold mb-2">300</span>
                            <span class="text-sm font-semibold text-gray-500"><span class="text-green-500">100 tickets
                                    sold</span> in last 24 hours</span>
                        </div>
                    </div>
                </template>
            </Card>

            <Card class="mr-5">
                <template #content>
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-lg font-semibold text-gray-500">Money</span>
                                <div class="bg-green-300 h-fit flex items-center p-2 rounded-lg">
                                    <span class="text-green-800 pi pi-money-bill"></span>
                                </div>
                            </div>
                            <span class="font-semibold mb-2">1500 $</span>
                            <span class="text-sm font-semibold text-gray-500"><span class="text-green-500">
                                    1200 $
                                </span> in last 24 hours</span>
                        </div>
                    </div>
                </template>
            </Card>

            <Card>
                <template #content>
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-lg font-semibold text-gray-500">Users</span>
                                <div class="bg-blue-300 h-fit flex items-center p-2 rounded-lg">
                                    <span class="text-blue-800 pi pi-user-plus"></span>
                                </div>
                            </div>
                            <span class="font-semibold mb-2">23</span>
                            <span class="text-sm font-semibold text-gray-500"><span class="text-green-500">10 new
                                    users</span> in last 24 hours</span>
                        </div>

                    </div>
                </template>
            </Card>
        </div>

        <div class="flex">
            <Card class="h-fit mr-5">
                <template #content>
                    <DataTable :value="lots" :rows="10" :paginator="true" responsiveLayout="scroll">
                        <template #header>
                            <span class="text-lg font-semibold">Recent Sales</span>
                        </template>
                        <Column style="width: 15%">
                            <template #header> Image </template>
                            <template #body="slotProps">
                                <img src="../assets/snicker.png" :alt="slotProps.data.image" class="max-w-none w-[80px]" />
                            </template>
                        </Column>
                        <Column field="name" header="Name" :sortable="true" style="width: 45%"></Column>
                        <Column field="value" header="Price" :sortable="true" style="width: 15%">
                            <template #body="slotProps">
                                {{ slotProps.data.value }} $
                            </template>
                        </Column>
                        <Column field="deadline" header="Deadline" style="width: 65%">
                            <template #body="slotProps">
                                <span class="text-nowrap">
                                    {{ slotProps.data.deadline }}
                                </span>
                            </template>
                        </Column>
                    </DataTable>
                </template>
            </Card>

            <div class="flex w-full flex-col">
                <Card class="w-full h-[485px] pt-4 mb-5">
                    <template #header>
                        <span class="pl-6 mb-4 text-lg font-semibold">Sales Overview</span>
                    </template>
                    <template #content>
                        <Chart class="h-full w-full" type="bar" :data="lineData" :options="lineOptions" />
                    </template>
                </Card>

                <Card class="w-full">
                    <template #content>
                        <Menu :popup="true" :model="items"></Menu>
                        <div>
                            <span class="block font-semibold mb-3">TODAY</span>
                            <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                                <li class="flex items-center py-2 border-bottom-1 surface-border">
                                    <div class="rounded-lg mr-2 bg-green-100 flex items-center p-1">
                                        <i class="pi pi-dollar text-xl text-green-500"></i>
                                    </div>
                                    <span class="text-900 line-height-3"><span
                                            class="text-blue-500 underline cursor-pointer" @click="goToUser">@v_tilte</span>
                                        <span class="text-700"> has purchased a 1 ticket for <span
                                                class="text-green-500 underline" @click="goToLots">Nike Air
                                                Jordan</span></span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chart from 'primevue/chart';
import Menu from 'primevue/menu';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToUser = async () => {
    await router.push('/');
}

const goToLots = async () => {
    await router.push('/lots');
}

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);

const lots = [
    {
        id: 1,
        name: 'Nike Air Jordan',
        value: 500,
        tags: ['new', 'banger'],
        deadline: '01 Mar 2024 23:59:59',
        ticketPrice: 2.99,
        ticketsMax: 150,
        winner: '@v_tilte',
        image: '../assets/snicker.png'
    },
    {
        id: 2,
        name: 'Nike Air Jordan',
        value: 500,
        tags: ['new', 'banger'],
        deadline: '01 Mar 2024 23:59:59',
        ticketPrice: 2.99,
        ticketsMax: 150,
        winner: null,
        image: '../assets/snicker.png'
    },
    {
        id: 3,
        name: 'Nike Air Jordan',
        value: 500,
        tags: ['new', 'banger'],
        deadline: '01 Mar 2024 23:59:59',
        ticketPrice: 2.99,
        ticketsMax: 150,
        winner: '@v_tilte',
        image: '../assets/snicker.png'
    },
    {
        id: 4,
        name: 'Nike Air Jordan',
        value: 500,
        tags: ['new', 'banger'],
        deadline: '01 Mar 2024 23:59:59',
        ticketPrice: 2.99,
        ticketsMax: 150,
        winner: '@v_tilte',
        image: '../assets/snicker.png'
    },
    {
        id: 5,
        name: 'Nike Air Jordan',
        value: 500,
        tags: ['new', 'banger'],
        deadline: '01 Mar 2024 23:59:59',
        ticketPrice: 2.99,
        ticketsMax: 150,
        winner: '@v_tilte',
        image: '../assets/snicker.png'
    },
    {
        id: 6,
        name: 'Nike Air Jordan',
        value: 600,
        tags: ['new', 'banger'],
        deadline: '01 Mar 2024 23:59:59',
        ticketPrice: 2.99,
        ticketsMax: 150,
        winner: '@v_tilte',
        image: '../assets/snicker.png'
    },
]

const lineData = ref({
    labels: ['Nike Air Jordan', 'Nike Air Force 1', 'New Balance 540'],
    datasets: [
        {
            label: 'Lots Dataset',
            data: [200, 150, 300],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});

const lineOptions = ref({
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
});
</script>

<style>
.p-highlight {
    background-color: rgb(68, 136, 214);
    color: #ffffff;
}
</style>