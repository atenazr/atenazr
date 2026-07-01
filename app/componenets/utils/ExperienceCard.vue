<template>

    <div class="w-full card flex flex-col xl:h-[580px] bg-white p-4 xl:px-6">
      <div class="mb-1 xl:mb-2">
        <nuxt-icon class="text-[48px] text-main-yellow" :name="icon" />
      </div>
      <div class="flex flex-col md:flex-row mb-2">
        <div class="xl:text-lg font-semibold">
          {{ title }}
        </div>
        <div class="mt-2 md:mt-0 ml-auto text-sm font-semibold">
          {{ duration }}
        </div>
      </div>
      <div class="text-sm xl:text-base mb-2">
        {{ company }}
      </div>
      <p v-html="description" class="text-sm xl:text-base text-justify mb-2">
      </p>
      <div v-if="!!images">
<!--        {{ item.images }}-->
      </div>
      <div v-if="!!link1" class=" xl:mt-auto">
          <a class="text-sm md:text-base hover:text-main-yellow font-semibold" :href="link1" target="_blank">Link</a>
      </div>
    </div>

</template>

<script lang="ts" setup>
const props = defineProps(['icon','title','duration','description','company','images','link1'])
</script>

<style scoped>

</style>