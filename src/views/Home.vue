<script setup lang="ts">
import { RouterView } from 'vue-router';
import Timeline from '../components/Timeline.vue';
</script>

<template>
  <RouterView />
  <Suspense>
    <template #default>
      <Timeline />
    </template>
    <template #fallback>
      <progress class="progress is-primary is-small"></progress>
    </template>
  </Suspense>
</template>