<template>
  <div class="w-full flex flex-wrap">
    <div class=" w-full md:w-1/2 xl:w-1/3 p-2 md:p-4 xl:p-8" v-for="item in skills" :key="item.id">
      <div class="w-full card flex flex-col">
        <div class="text-white font-semibold px-2 py-3 text-center bg-main-dark-blue text-sm md:text-md">
          {{ item.title }}
        </div>
        <div v-html="item.description" class="text-sm xl:text-base md:h-[200px] xl:h-[320px] text-main-dark-blue p-2 xl:p-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills } from "../assets/data/skills";

</script>

<style scoped>

</style>