<template>
    <Card>
        <template #content>
            <DataTable :value="lots">
                <template #header>
                    <div class="flex justify-between self-center">
                        <div class="text-2xl font-semibold">Lots</div>
                        <div>
                            <Button class="hover:bg-blue-700 mr-2 p-[4px] bg-blue-500 text-white" icon="pi pi-plus"
                                @click="toggleCreateModal" />
                            <Button class="hover:bg-blue-700 p-[4px] bg-blue-500 text-white" icon="pi pi-refresh" />
                        </div>
                    </div>
                </template>

                <Column header="Name" field="name" />
                <Column header="Image" field="image">
                    <template #body>
                        <img class="w-20" src="../assets/snicker.png" alt="lot image" />
                    </template>
                </Column>
                <Column header="Tags" field="tags">
                    <template #body="slotProps">
                        <Tag v-for="item in slotProps.data.tags" :key="item" class="bg-blue-500 text-white mr-2"
                            :value="item" />
                    </template>
                </Column>
                <Column header="Deadline" field="deadline" />
                <Column header="Retail Price" field="value">
                    <template #body="slotProps">
                        {{ slotProps.data.value }} $
                    </template>
                </Column>
                <Column header="Ticket Price" field="ticketPrice">
                    <template #body="slotProps">
                        {{ slotProps.data.ticketPrice }} $
                    </template>
                </Column>
                <Column header="Max tickets" field="ticketsMax" />
                <Column header="Winner" field="winner">
                    <template #body="slotProps">
                        <span v-if="slotProps.data.winner" class="underline cursor-pointer" @click="goToUser(slotProps.data.winner)">
                            {{ slotProps.data.winner }}
                        </span>

                        <span v-else>
                            No winner
                        </span>
                    </template>
                </Column>

                <Column header="Actions">
                    <template #body>
                        <Button label="Edit" class="hover:bg-blue-700 p-[6px] w-full bg-blue-500 text-white"
                            @click="toggleEditModal" />
                    </template>
                </Column>
            </DataTable>
        </template>
    </Card>

    <Dialog :visible="createModalIsVisible" modal header="Create Lot" :style="{ width: '35vw' }">
        <template #closeicon>
            <i class="border-red-400 p-[4px] pi pi-times hover:bg-stone-200 hover:rounded-xl" @click="toggleCreateModal" />
        </template>

        <FloatLabel class="mt-8 mb-3">
            <InputText v-model="name" class="border-gray-300 w-full border p-2" id="lotname"
                aria-describedby="lotname-help" />
            <label for="lotname">Lot Name</label>
        </FloatLabel>

        <FloatLabel class="mt-8 mb-3">
            <InputText v-model="retailPrice" class="border-gray-300 w-full border p-2" id="retailprice"
                aria-describedby="lotname-help" />
            <label for="retailprice">Retail Price $</label>
        </FloatLabel>

        <FloatLabel class="mt-8 mb-3">
            <InputText v-model="ticketPrice" class="border-gray-300 w-full border p-2" id="ticketprice"
                aria-describedby="lotname-help" />
            <label for="ticketprice">Ticket Price $</label>
        </FloatLabel>

        <FloatLabel class="mt-8 mb-8">
            <InputText v-model="maxTickets" class="border-gray-300 w-full border p-2" id="maxtickets"
                aria-describedby="lotname-help" />
            <label for="maxtickets">Max Tickets</label>
        </FloatLabel>

        <FileUpload class="custom-uploader upload=file" name="demo[]" url="/api/upload" :multiple="true" accept="image/*"
            :maxFileSize="1000000">
            <template #empty>
                <p class="text-xs text-gray-400">Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </Dialog>

    <Dialog :visible="editModalIsVisible" modal header="Edit Lot" :style="{ width: '35vw' }">
        <template #closeicon>
            <i class="border-red-400 p-[4px] pi pi-times hover:bg-stone-200 hover:rounded-xl" @click="toggleEditModal" />
        </template>

        <FloatLabel class="mt-8 mb-3">
            <InputText v-model="name" class="border-gray-300 w-full border p-2" id="lotname"
                aria-describedby="lotname-help" />
            <label for="lotname">Lot Name</label>
        </FloatLabel>

        <FloatLabel class="mt-8 mb-3">
            <InputText v-model="retailPrice" class="border-gray-300 w-full border p-2" id="retailprice"
                aria-describedby="lotname-help" />
            <label for="retailprice">Retail Price $</label>
        </FloatLabel>

        <FloatLabel class="mt-8 mb-3">
            <InputText v-model="ticketPrice" class="border-gray-300 w-full border p-2" id="ticketprice"
                aria-describedby="lotname-help" />
            <label for="ticketprice">Ticket Price $</label>
        </FloatLabel>

        <FloatLabel class="mt-8 mb-8">
            <InputText v-model="maxTickets" class="border-gray-300 w-full border p-2" id="maxtickets"
                aria-describedby="lotname-help" />
            <label for="maxtickets">Max Tickets</label>
        </FloatLabel>

        <FileUpload class="custom-uploader upload=file" name="demo[]" url="/api/upload" :multiple="true" accept="image/*"
            :maxFileSize="1000000">
            <template #empty>
                <p class="text-xs text-gray-400">Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </Dialog>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';
import Tag from 'primevue/tag';
import { ref } from 'vue';

const editModalIsVisible = ref<boolean>(false)
const createModalIsVisible = ref<boolean>(false)

const name = ref<string>("")
const ticketPrice = ref<string>("")
const maxTickets = ref<string>("")
const retailPrice = ref<string>("")

const toggleEditModal = () => {
    editModalIsVisible.value = !editModalIsVisible.value
}

const toggleCreateModal = () => {
    createModalIsVisible.value = !createModalIsVisible.value
}

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
]


const goToUser = (telegramLogin: string) => {
    window.open(`https://t.me/${telegramLogin.slice(1)}`, '_blank')
}
</script>

<style>
.p-fileupload-buttonbar {
    padding: 0 !important;
}

.p-fileupload-content {
    margin-top: 12px;
    padding: 0 !important;
}

.custom-chips > ul {
    border: 1px solid black;
    min-height: 42px;
}
</style>