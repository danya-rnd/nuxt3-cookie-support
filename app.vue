<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
const { data } = await $fetch(`/api/v1/example`, {
  ...useBaseURL(),
  headers: useRequestHeaders(["cookie"]),
});
</script>
