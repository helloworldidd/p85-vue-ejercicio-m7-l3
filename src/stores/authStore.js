import { defineStore } from 'pinia'
import { FALSE } from 'sass'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    
    // State
    const autenticado = ref(false)
    const username = ref('')
    const cargando = ref(false)
    const error = ref(null)

    // Getters
    const isAutenticado = computed(() => {
        return  autenticado.value
    })

    // Actions
    const login = async (
        usuario,
        password
    ) => {

        cargando.value = true
        error.value = null

        try{
            await new Promise((resolve) => {
                setTimeout(resolve, 1000)
            })

            if(
                usuario === 'admin' &&
                password === '1234'
            ){
                autenticado.value = true
                username.value = usuario
                return true
            }

            error.value = 'Credenciales incorrectas 🐿️☄️'
            
            return false

        }
        catch(err){
            error.value = "Error al iniciar sesión " + err 
        }
        finally{
            cargando.value = false
        }

    }


    const logout = () => {
        autenticado.value = false
        username.value = ''
        error.value = null
    }


    return {
        autenticado,
        username,
        cargando,
        error,

        isAutenticado,

        login,
        logout
    }
})