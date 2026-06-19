<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useFrameworksStore } from "@/stores/frameworksStore";

const router = useRouter();
const authStore = useAuthStore();
const frameworksStore = useFrameworksStore();

onMounted(() => {
  frameworksStore.cargarFrameworks();
});

const cerrarSesion = () => {
  authStore.logout();
  router.push({
    name: "login",
  });
};
</script>

<template>
  <div>


    <nav class="d-flex justify-content-end bg-dark">
      <router-link to="/" class="btn btn-sm btn-secondary m-2">
        volver
      </router-link>
      <button @click="cerrarSesion" class="btn btn-sm btn-danger m-2">
        Logout
      </button>
    </nav>


    <div class="container">
      <h1 class="text-center mt-2">Dashboard</h1>
      
      <h2>Frameworks</h2>
      <p>Total: {{ frameworksStore.totalFrameworks }}</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Framework</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="framework in frameworksStore.frameworks" :key="framework.id">
            <td>{{ framework.name }}</td>
            <td>{{ framework.tipo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </template>

<style scoped></style>
