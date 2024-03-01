<template>
    <Card>
        <template #content>
            <DataTable :value="transactions">
                <template #header>
                    <div class="flex justify-between self-center">
                        <div class="text-2xl font-semibold">Transactions</div>
                        <div>
                            <Button class="hover:bg-blue-700 p-[4px] bg-blue-500 text-white" icon="pi pi-refresh" />
                        </div>
                    </div>
                </template>

                <Column header="ID" field="transactionId"></Column>



                <Column header="Lot ID" field="lotId">
                    <template #body="slotProps">
                        <span @click="goToLot" class="underline cursor-pointer">{{ slotProps.data.lotId }}</span>
                    </template>
                </Column>

                <Column>
                    <template #body>
                        <div class="bg-blue-400 w-[32px] p-[4px] rounded-lg">
                            <svg
                                class="fill-white" width="24" height="24" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0020048,13 C17.5542895,13 18.0020048,13.4477153 18.0020048,14 C18.0020048,14.5128358 17.6159646,14.9355072 17.1186259,14.9932723 L17.0020048,15 L5.41700475,15 L8.70911154,18.2928932 C9.0695955,18.6533772 9.09732503,19.2206082 8.79230014,19.6128994 L8.70911154,19.7071068 C8.34862757,20.0675907 7.78139652,20.0953203 7.38910531,19.7902954 L7.29489797,19.7071068 L2.29489797,14.7071068 C1.69232289,14.1045317 2.07433707,13.0928192 2.88837381,13.0059833 L3.00200475,13 L17.0020048,13 Z M16.6128994,4.20970461 L16.7071068,4.29289322 L21.7071068,9.29289322 C22.3096819,9.8954683 21.9276677,10.9071808 21.1136309,10.9940167 L21,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.48716416 6.38604019,9.06449284 6.88337887,9.00672773 L7,9 L18.585,9 L15.2928932,5.70710678 C14.9324093,5.34662282 14.9046797,4.77939176 15.2097046,4.38710056 L15.2928932,4.29289322 C15.6533772,3.93240926 16.2206082,3.90467972 16.6128994,4.20970461 Z" />
                            </svg>
                        </div>
                    </template>
                </Column>

                <Column header="Price" field="price" />

            </DataTable>
        </template>
    </Card>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLot = async () => {
    await router.push(`/lots`)
}

const transactions = [
    {
        id: 1,
        transactionId: '0x0121jdfjei213',
        lotId: 1,
        price: 500,
    },
    {
        id: 2,
        transactionId: '0x0121jdfjei213',
        lotId: 1,
        price: 500,
    },
    {
        id: 3,
        transactionId: '0x0121jdfjei213',
        lotId: 1,
        price: 500,
    },
    {
        id: 4,
        transactionId: '0x0121jdfjei213',
        lotId: 1,
        price: 500,
    },
]

</script>

<style></style>