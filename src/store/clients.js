import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useClientsStore = defineStore('clients', () => {
  // State
  const clients = ref([]);
  const selectedClient = ref(null);

  // Getters
  const getSelectedClient = () => computed(() => {
    return selectedClient.value;
  });

  const getClients = () => computed(() => {
    return clients.value;
  });

  // Actions
  const setSelectedClientById = async (id) => {
    await fetchClientById(id);
  };

  // API Handlers (Ideally these would be separated services to interact with the API)
  const fetchClients = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/clients`);
    clients.value = await response.json();
  };

  const fetchClientById = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/clients/${id}`);
    selectedClient.value = await response.json();
  };

  const fetchClientProducts = async () => {
    const id = selectedClient.value.customerId;
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`);  
    const products = await response.json();
    if(products.length === 0) return [];
    return products;
  };

  return {
    clients,
    fetchClients,
    setSelectedClientById,
    getSelectedClient,
    getClients,
    fetchClientProducts,
  };
});