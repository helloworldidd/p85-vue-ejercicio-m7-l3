import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/api/api";

export const useFrameworksStore = defineStore("frameworks", () => {
  // STATE
  const frameworks = ref([]);
  const cargando = ref(false);
  const error = ref(null);

  // GETTERS
  const totalFrameworks = computed(() => {
    return frameworks.value.length;
  });

  const hayFrameworks = computed(() => {
    return frameworks.value.length > 0;
  });

  // ACTIONS
  const cargarFrameworks = async () => {
    cargando.value = true;
    error.value = null;

    try {
      const { data } = await api.get("/frameworks");

      frameworks.value = data;
    } catch (err) {
      error.value = "Error al cargar frameworks";
    } finally {
      cargando.value = false;
    }
  };

  return {
    frameworks,
    cargando,
    error,

    totalFrameworks,
    hayFrameworks,

    cargarFrameworks,
  };
});