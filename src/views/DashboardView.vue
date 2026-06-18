<script setup>

import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/authStore'


const router = useRouter()
const authStore = useAuthStore()

const cerrarSesion = () => {
  authStore.logout()
  router.push({
    name: 'login'
  })

  
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    

<button
  @click="cerrarSesion"
  class="btn btn-danger m-2">
  Logout
</button>

  </div>
</template>

<style scoped>

</style>