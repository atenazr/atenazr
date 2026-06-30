<template>
  <a v-if="!!!internal"
      :href="link" target="_blank"
      class="w-fit text-sm xl:text-base hover:text-white hover:bg-main-yellow duration-[0.3s] ease-out px-3 xl:px-6 py-1.5 xl:py-3 my-4 bg-transparent border border-main-yellow rounded-md text-main-yellow">
    {{ text }}
  </a>
  <router-link v-else :to="link"
  class="w-fit text-sm xl:text-base hover:text-white hover:bg-main-yellow duration-[0.3s] ease-out px-3 xl:px-6 py-1.5 xl:py-3 my-4 bg-transparent border border-main-yellow rounded-md text-main-yellow">
    {{ text }} </router-link>
</template>

<script setup lang="ts">
const props =  defineProps(['internal','link','text'])
</script>

<style scoped>

</style>