<script setup>
import { onMounted, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import { useClientsStore } from '../store/clients';
import PageTitle from '../components/PageTitle.vue';
import Layout from '../layouts/main.vue';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { useRouter } from 'vue-router';

const router = useRouter();
const clientsStore = useClientsStore();
const clients = ref([]);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  givenName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  familyName1: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});
const selectedClient = ref(null);
onMounted(async () => {
  await clientsStore.fetchClients();
  clients.value = clientsStore.getClients().value;
});

const clearFilter = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    givenName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    familyName1: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  };
};

const handleRowClick = (event) => {
  selectedClient.value = event.data;
  router.push(`/clients/${selectedClient.value._id}`);
};
</script>

<template>
  {{ selectedClient }}
  <Layout>
    <div class="flex justify-between lg:items-center mb-8 flex-col lg:flex-row gap-4">
      <PageTitle title="Clients list" />
      <div class="flex gap-4 justify-between lg:justify-start">
        <InputText v-model="filters.global.value" placeholder="Search client details" />
        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" severity="contrast" class="filter-button text-center"/>
      </div>
    </div>
    <DataTable
      :filters="filters"
      :value="clients"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10]"
      v-model:selection="selectedClient"
      selectionMode="single"
      @row-click="handleRowClick"
      removableSort
    >
      <Column field="customerId" header="Customer ID"></Column>
      <Column field="givenName" header="Given Name" sortable>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
        </template>
      </Column>
      <Column field="familyName1" header="Family Name" sortable>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by family name" />
        </template>
      </Column>
      <Column field="email" header="Email" class="hidden lg:block"></Column>
    </DataTable>
  </Layout>
</template>

<style>
.p-datatable th {
  @apply bg-yellow-500 text-black;
}
.p-button {
  @apply hover:!bg-black hover:!text-white;
}
.filter-button .p-button-label {
  @apply -translate-x-1;
}
</style>