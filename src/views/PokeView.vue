<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritosStore } from '@/stores/favoritos'
// //Detalles
import { useGetData } from "@/composables/getData";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore();
const { add, findPoke } = useFavoritos;


const { getData, data, loading, error } = useGetData();

const back = () => {
    router.push("/pokemons");//aqui redirige a pokemons y lo vuelve a renderizar. Es una accion, no lo agrega router
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);//tomar parametro desde la url
</script>

<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">No existe el pokemon</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="" />
        <!-- <h1>Nombre Pokemon: {{ data.name }}</h1> -->
        <h1>Nombre Pokemon: {{ $route.params.name }}</h1> <!--Importante el signo dolar-->
        <button
            :disabled="findPoke(data.name)"
            @click="add(data)"
            class="btn btn-primary mb-2"
            
        >
            Agregar Favoritos
        </button>
    </div>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
