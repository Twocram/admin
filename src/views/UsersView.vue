<template>
    <Card>
        <template #content>
            <DataTable :value="users">
                <template #header>
                    <div class="flex justify-between self-center">
                        <div class="text-2xl font-semibold">Users</div>

                        <Button class="hover:bg-blue-700 bg-blue-500 text-white" severity="success" icon="pi pi-refresh"/>
                    </div>
                </template>

                <Column header="Name" field="name"></Column>

                <Column header="Username" field="username">
                    <template #body="slotProps">
                        <span class="underline cursor-pointer" @click="goToUser(slotProps.data.username)">
                            {{ slotProps.data.username }}
                        </span>
                    </template>
                </Column>

                <Column header="Chat ID" field="chatId"></Column>

                <Column header="TON wallet" field="tonWallet"></Column>

            </DataTable>
        </template>
    </Card>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Column from "primevue/column";
import Button from "primevue/button";

type User = {
    id: number;
    name: string;
    username: string;
    chatId: string | number;
    tonWallet: string;
}

const goToUser = (username: string) => {
    window.open(`https://t.me/${username.slice(1)}`, '_blank')
}

const users: User[] = [
    {
        id: 1,
        name: 'Artem',
        username: '@v_tilte',
        chatId: 1,
        tonWallet: '0x123456789fg'
    },
    {
        id: 2,
        name: 'Artem',
        username: '@v_tilte',
        chatId: 1,
        tonWallet: '0x123456789fg'
    },
    {
        id: 3,
        name: 'Artem',
        username: '@v_tilte',
        chatId: 1,
        tonWallet: '0x123456789fg'
    },

]
</script>

<style></style>
