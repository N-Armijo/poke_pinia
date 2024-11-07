//import { ref, computed } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {
  const favoritos = ref([]);
  if (localStorage.getItem("favoritos")){
    favoritos.value = JSON.parse(localStorage.getItem("favoritos"));
  }
  const add = (poke) => {
    favoritos.value.push(poke);
    localStorage.setItem("favoritos",JSON.stringify(favoritos.value));//localStorage no hay que importarlo. Se guarda ("clave", JSON.stringify(valor)) -> JSON.stringify hace que se guarde como json de lo contrario queda como texto plano 
  }
  const remove = (id) => {
    favoritos.value = favoritos.value.filter((poke) => poke.id !== id);
    localStorage.setItem("favoritos",JSON.stringify(favoritos.value)); //Hay que volver  guardar los favoritos, de lo contrario mostrara lo que sigue en el localstorage al refrescar
  }
  const findPoke = (name) => {
    return favoritos.value.find((item) => item.name === name); //debe retornar la respuesta
  }
  return { favoritos, add, remove, findPoke }
})
