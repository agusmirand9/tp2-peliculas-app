<script setup>
defineProps({
  id: Number,
  title: String,
  poster_path: String,
  release_date: String,
  vote_average: Number,
})
</script>

<template>
  <v-card>
    <v-img
      height="350px"
      :src="poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/500x750?text=Sin+imagen'"
      cover
    ></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>
      {{ release_date ? release_date.substring(0, 4) : 'Sin fecha' }}
      · ⭐ {{ vote_average?.toFixed(1) }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" :to="'/pelicula/' + id">Ver detalle</v-btn>
    </v-card-actions>
  </v-card>
</template>