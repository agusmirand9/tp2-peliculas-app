<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-title>
        <router-link to="/" class="text-decoration-none text-white">
          🎬 Películas App
        </router-link>
      </v-app-bar-title>
      <v-btn to="/" prepend-icon="mdi-home">Inicio</v-btn>
      <v-btn to="/favoritos" prepend-icon="mdi-heart">Favoritos</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
</script>