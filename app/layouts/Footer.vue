<template>
  <div class="w-full border-t-4 border-main-yellow text-secondary-white bg-main-dark-blue py-1.5 px-4 xl:py-3 xl:px-8">
    <div class="container flex align-center justify-center">
      <div class="text-xs xl:text-sm font-medium ml-2.5 xl:ml-5 mr-auto">
         Developed by Fatemeh Zare.
        <br>
          All Rights Reserved.
      </div>
      <div class="flex h-full justify-center align-center mr-2.5 xl:mr-5">
        <a target="_blank" class="p-1 mx-1 xl:mx-2" v-for="item in socialMedia" :key="item.id" :href="item.link" >
          <nuxt-icon class="text-[22px] xl:text-[28px] hover:text-main-yellow duration-[0.5s]" :name="item.icon" />
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { socialMedia } from "../assets/data/social-media";
</script>

<style scoped>

</style>