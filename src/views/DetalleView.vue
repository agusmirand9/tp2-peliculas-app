<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDetalle } from '@/services/tmdb'

const route = useRoute()
const pelicula = ref(null)
const loading = ref(true)
const favorito = ref(false)

onMounted(async () => {
  try {
    pelicula.value = await getDetalle(route.params.id)
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    favorito.value = favoritos.some(p => p.id === pelicula.value.id)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

function toggleFavorito() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
  const existe = favoritos.some(p => p.id === pelicula.value.id)

  if (existe) {
    const nuevos = favoritos.filter(p => p.id !== pelicula.value.id)
    localStorage.setItem('favoritos', JSON.stringify(nuevos))
    favorito.value = false
  } else {
    favoritos.push(pelicula.value)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
    favorito.value = true
  }
}
</script>

<template>
  <v-container>
    <v-row v-if="!loading && pelicula">
      <v-col cols="12" md="4">
        <v-img
          :src="pelicula.poster_path ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}` : 'https://placehold.co/500x750?text=Sin+imagen'"
          height="450px"
          cover
        ></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <h1>{{ pelicula.title }}</h1>
        <p class="text-medium-emphasis mb-2">
          {{ pelicula.release_date?.substring(0, 4) }}
          · {{ pelicula.runtime }} min
          · ⭐ {{ pelicula.vote_average?.toFixed(1) }}
        </p>
        <p class="mb-4">{{ pelicula.overview || 'Sin descripción disponible.' }}</p>

        <v-btn
          :color="favorito ? 'red' : 'primary'"
          prepend-icon="mdi-heart"
          @click="toggleFavorito"
        >
          {{ favorito ? 'Quitar de favoritos' : 'Agregar a favoritos' }}
        </v-btn>

        <v-btn class="ml-2" to="/" variant="tonal">Volver</v-btn>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <v-skeleton-loader height="450" type="image, article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>