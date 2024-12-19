<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useClientsStore } from '../store/clients';
import Layout from '../layouts/main.vue';
import Button from 'primevue/button';
import PageTitle from '../components/PageTitle.vue';
import CustomerDetails from '../components/CustomerDetails.vue';
import AssociatedProducts from '../components/AssociatedProducts.vue';
const clientsStore = useClientsStore();

const { setSelectedClientById, getSelectedClient } = clientsStore;

const route = useRoute();
const clientId = route.params.id;
const client = ref(null);
const loading = ref(null);
const router = useRouter();
const associatedProducts = ref(null);

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
  <Layout>
    <div class="flex gap-4 flex-col" v-if="client">
      <div class="flex justify-between">
        <PageTitle title="Client details" />
        <Button label="Back" @click="router.back()" />
      </div>
      <section class="flex gap-8 flex-col lg:flex-row">
        <div class="bg-gray-200 rounded-full w-24 h-24 flex justify-center items-center">
          <h2 class="text-xs">Profile picture</h2>
        </div>
        <CustomerDetails :client="client" />
        <AssociatedProducts :products="associatedProducts" :customerId="client.customerId" />
      </section>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </Layout>
</template>
