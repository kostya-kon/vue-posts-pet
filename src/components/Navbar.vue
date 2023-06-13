<template>
  <div class="navbar">
    <div class="navbar-end">
      <div class="buttons">
        <button class="button" @click="modal.showModal()">Sign Up</button>
        <RouterLink to="/posts/new" class="button">New Post</RouterLink>
      </div>
    </div>
  </div>
  <Teleport to="#modal">
    <SignupForm/>
  </Teleport>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useModal } from '../composables/modal';
import SignupForm from './SignupForm.vue';

const modal = useModal();

</script>

<style scoped>

</style>