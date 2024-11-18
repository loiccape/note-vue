<template>
    <p>Note detail</p>
    <p>{{ index }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

// Accéder au paramètre d'URL avec useRoute
const route = useRoute();
const index = route.params.index;
</script>