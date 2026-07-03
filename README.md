# 🎬 Películas App

Parcial 2 Aplicaciones para Dispositivos Móviles - Agustina Miranda

Aplicación web para buscar y descubrir películas, desarrollada con Vue 3, Vuetify y la API de The Movie Database (TMDB).

## ✨ Funcionalidades

- 🔥 Listado de películas populares
- 🔍 Búsqueda de películas por título
- 🎭 Filtro por género
- 📄 Vista de detalle con título, sinopsis, año, duración y rating
- ❤️ Sistema de favoritos con persistencia en localStorage
- 📱 Diseño responsive

## 🛠️ Tecnologías

- Vue 3 (Composition API)
- Vue Router
- Vuetify
- TMDB API
- Vite + TypeScript

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <URL-de-tu-repo>

# Entrar al proyecto
cd tp2-peliculas-app

# Instalar dependencias
pnpm install
```

### Configurar la API Key

Este proyecto necesita una API Key de TMDB para funcionar.

1. Creá una cuenta gratis en [The Movie Database](https://www.themoviedb.org/) y generá tu API Key en [Configuración > API](https://www.themoviedb.org/settings/api).
2. Copiá el archivo `.env.example` y renombralo a `.env`:

```bash
cp .env.example .env
```

3. Reemplazá el valor de `VITE_TMDB_API_KEY` por tu propia API Key.

### Correr en desarrollo

```bash
pnpm dev
```

## 📡 API

Este proyecto usa la API de [The Movie Database (TMDB)](https://developer.themoviedb.org/docs).

## Autor

**Agustina Miranda**