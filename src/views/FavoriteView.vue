<script setup>
import { ref } from 'vue'
import MovieCard from '@/components/MovieCard.vue'

const favoritos = ref(JSON.parse(localStorage.getItem('favoritos')) || [])
</script>

<template>
  <v-container>
    <h1 class="mb-4">Mis Favoritos</h1>

    <v-row v-if="favoritos.length > 0">
      <v-col
        v-for="pelicula in favoritos"
        :key="pelicula.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <MovieCard v-bind="pelicula" />
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <p>Todavía no agregaste ninguna película a favoritos.</p>
        <v-btn to="/" color="primary" class="mt-2">Buscar películas</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>