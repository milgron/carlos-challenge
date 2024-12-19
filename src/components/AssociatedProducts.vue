<script setup>
import { ref } from 'vue';
import { useClientsStore } from '../store/clients';

const props = defineProps({
  products: Array
});

const associatedProducts = ref(null);
const { fetchClientProducts } = useClientsStore();

const getProducts = async () => {
  associatedProducts.value = await fetchClientProducts(props.customerId);
};

</script>

<template>
  <section>
    <div class="flex flex-col gap-2">
      <h2 class="text-xl font-semibold">Associated products</h2>
      <div class="flex gap-2" v-if="associatedProducts">
        <p v-if="associatedProducts.length === 0">No products associated</p>
        <span 
          v-else 
          v-for="product in associatedProducts" 
          :key="product" 
          class="text-sm border border-gray-900 rounded-md p-2 w-fit cursor-pointer hover:bg-gray-200" 
          v-tooltip="`Sold at ${product.soldAt}`"
        >
          {{ product.productName }}
        </span>
      </div>
      <div class="flex flex-col gap-2" v-else>
        <Button label="Get user associated products" @click="getProducts()" size="small" />
      </div>
    </div>
  </section>
</template>

<style>
.p-tooltip-text {
  font-size: 10px;
}
</style>