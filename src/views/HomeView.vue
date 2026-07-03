<script setup>
import { ref, computed, onMounted } from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import { getPopulares, buscarPeliculas, getGeneros } from '@/services/tmdb'

const peliculas = ref([])
const generos = ref([])
const loading = ref(true)
const busqueda = ref('')
const generoSeleccionado = ref(null)

onMounted(async () => {
  try {
    peliculas.value = await getPopulares()
    generos.value = await getGeneros()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

async function buscar() {
  loading.value = true
  try {
    if (busqueda.value.trim() === '') {
      peliculas.value = await getPopulares()
    } else {
      peliculas.value = await buscarPeliculas(busqueda.value)
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

// Filtro por género, se aplica sobre la lista ya cargada
const peliculasFiltradas = computed(() => {
  if (!generoSeleccionado.value) return peliculas.value
  return peliculas.value.filter(p => p.genre_ids?.includes(generoSeleccionado.value))
})
</script>

<template>
  <v-container>
    <h1 class="mb-4">Películas Populares</h1>

    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="busqueda"
          label="Buscar película por título"
          prepend-inner-icon="mdi-magnify"
          @keyup.enter="buscar"
        >
          <template v-slot:append>
            <v-btn color="primary" @click="buscar">Buscar</v-btn>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          v-model="generoSeleccionado"
          :items="generos"
          item-title="name"
          item-value="id"
          label="Filtrar por género"
          clearable
        ></v-select>
      </v-col>
    </v-row>

    <v-row v-if="!loading">
      <v-col
        v-for="pelicula in peliculasFiltradas"
        :key="pelicula.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <MovieCard v-bind="pelicula" />
      </v-col>
      <v-col v-if="peliculasFiltradas.length === 0" cols="12">
        <p>No se encontraron películas.</p>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3">
        <v-skeleton-loader height="450" type="image, article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>