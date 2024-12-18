<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useClientsStore } from '../store/clients';
import { storeToRefs } from 'pinia';

const clientsStore = useClientsStore();

const { setSelectedClientById, getSelectedClient } = clientsStore;

const route = useRoute();
const clientId = route.params.id;
const client = ref(null);
const loading = ref(null);

onMounted(async () => {
  loading.value = true;
  await setSelectedClientById(clientId);

  try {
    client.value = getSelectedClient().value;
    loading.value = false;
  } catch (error) {
    client.value = null;
    loading.value = false;
  }
});
</script>

<template>
  <div class="bg-gray-100" v-if="client">
    <h1 class="text-3xl font-bold underline">
      {{ client.givenName }} {{ client.familyName1 }}
    </h1>
  </div>
  <div class="bg-gray-100" v-else>
    <p>Loading...</p>
  </div>
</template>