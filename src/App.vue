<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar bg-dark navbar-dark">
        <div class="container">
            <RouterLink to="/" class="me-3">
                <img
                src="@/assets/logo.svg"
                alt=""
                width="30"
                height="24"
                class="d-inline-block align-text-top"
                />PokeAPI
            </RouterLink>
            
            <div >
                <RouterLink to="/" class="me-3">Home</RouterLink>
                <RouterLink to="/pokemons" class="me-3">Pokemons</RouterLink>
                <RouterLink to="/favoritos" class="me-3">Favoritos</RouterLink>
            </div>
        </div>
    </nav>

    <div class="container text-center">
        <RouterView />
    </div>
</template>
