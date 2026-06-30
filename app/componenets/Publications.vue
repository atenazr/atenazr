<template>
  <div id="pub" class=" w-full bg-secondary-white text-main-dark-blue p-4 xl:p-8 pb-6 xl:pb-12">
    <div id="publications" class="w-full py-2 xl:py-4 px-4 xl:px-8"></div>
    <div class="w-full container">
      <HeadingTitle tit="Publications" />
      <div class=" w-full pl-5 xl:pl-10 pr-3 xl:pr-6 py-1.5 xl:py-3">
          <ul class="list-disc">
              <li v-for="item in publications" :key="item.id"
                  class="w-full text-secondary-white mb-1 xl:mb-2">
                <span>
                    {{ item.authors }}
                </span>
                .
                <span class="italic">
                  {{ item.title }}
                </span>
                .
                <span>
                  {{ item.publisher }}
                </span>
              </li>
          </ul>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import HeadingTitle from "./utils/HeadingTitle.vue";
import {publications} from "../assets/data/publications";
</script>

<style scoped>
#pub{
  background:linear-gradient(35deg,rgba(0,0,0,70%) 30%, rgba(0,0,0,30%) 90%),
  url('/assets/images/publications.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>