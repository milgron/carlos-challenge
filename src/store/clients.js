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

  // Actions
  const setSelectedClientById = async (id) => {
    await fetchClientById(id);
  };

  // API Handlers
  const fetchClients = async () => {
    const response = await fetch('http://localhost:3000/api/clients');
    clients.value = await response.json();
  };

  const fetchClientById = async (id) => {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`);
    selectedClient.value = await response.json();
  };

  return {
    clients,
    fetchClients,
    setSelectedClientById,
    getSelectedClient,
  };
});