<template>
  <RouterLink
    :to="`/posts/${post.id}`"
    class="panel-block is-flex is-flex-direction-column is-align-items-flex-start"
  >
    <a>{{ post.title }}</a>
    <div>{{ post.created.toFormat("dd MMM yyyy") }}</div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { TimelinePost } from "../posts";

defineProps<{
  post: TimelinePost;
}>();
</script>
<style scoped></style>
