<template>
  <div class="font-inter">
    <Header/>
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>