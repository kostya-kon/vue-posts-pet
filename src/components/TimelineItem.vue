<template>
  <a
    class="panel-block is-flex is-flex-direction-column is-align-items-flex-start"
  >
    <a>{{ post.title }}</a>
    <div>{{ post.created.toFormat("dd MMM yyyy") }}</div>
  </a>
</template>

<script setup lang="ts">
import { TimelinePost } from "../posts";

defineProps<{
  post: TimelinePost;
}>();
</script>
<style scoped></style>
