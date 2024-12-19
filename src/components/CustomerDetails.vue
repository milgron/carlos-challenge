<script setup>
const props = defineProps({
  client: Object
});
</script>

<template>
  <section>
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-semibold">{{ client.givenName }} {{ client.familyName1 }}</h1>
      <p>Customer ID: {{ client.customerId }}</p>
      <p>Email: {{ client.email }}</p>
      <p>Phone: {{ client.phone }}</p>
      <p>{{ client.docType }}: {{ client.docNum }}</p>
    </div>
  </section>
</template>