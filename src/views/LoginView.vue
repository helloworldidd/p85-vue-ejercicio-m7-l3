<script setup>

// reactividad
import { ref, computed } from 'vue'

// router
import { useRouter } from 'vue-router'

// pinia
import { useAuthStore } from '@/stores/authStore'


const router = useRouter()
const authStore = useAuthStore()

const usuario = ref('')
const password = ref('')

const iniciarSesion = async () => {
  const resultado = await authStore.login(
    usuario.value,
    password.value
  )

  if (resultado) {
    router.push({
      name: 'dashboard'
    })
  }
    
  
    
  
}




</script>


<template>
  
  
  <nav
    v-if="authStore.autenticado"
  class="d-flex justify-content-end bg-dark">
    <router-link to="/dashboard" class="btn btn-sm btn-primary m-2">
      dashboard
    </router-link>
  </nav>



  <div class="container">
    


    <h1>Login</h1>
    
    <form @submit.prevent="iniciarSesion">
      <input
        v-model="usuario"
        type="text"
        placeholder="Ingrese Usuario"
      > <br>
      <input
        v-model="password"
        type="password"
        placeholder="Ingrese Password"
      > <br>
    
      <button
        :disabled="authStore.cargando"
        class="btn btn-primary m-2" type="submit">
        {{ authStore.cargando ? 'Cargando...' : 'Iniciar Sesión' }}
      </button>
    </form>
    <p>{{ authStore.error }}</p>
  </div>
</template>

