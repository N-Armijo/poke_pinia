<script setup>
import { useFavoritosStore } from '../stores/favoritos';
import { storeToRefs } from 'pinia';
const useFavoritos = useFavoritosStore();
const {favoritos} = storeToRefs(useFavoritos); //asi se desestructura
const {remove} = useFavoritos; //como no es reactiva desetructuro de esta manera
</script>

<template>
    <h1>Favoritos</h1>
    <p>Sin favoritos</p>
    <ul class="list-group">
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <img :src="poke.sprites.front_default" :alt="poke.name">
            <div>
                {{poke.name}}
            </div>
            <div>
                <RouterLink
                    class="btn btn-sm btn-primary me-2"
                    :to="`/pokemons/${poke.name}`"
                >
                    Más información
                </RouterLink>
                <button class="btn btn-sm btn-danger"
                    @click="remove(poke.id)"
                >
                    Eliminar
                </button>
            </div>
        </li>
    </ul>
</template>
