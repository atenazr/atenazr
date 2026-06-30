<template>

    <div class="w-full card flex flex-col md:h-[560px] bg-white py-4 px-6">
      <div class="mb-1 xl:mb-2">
        <nuxt-icon class="text-[48px] text-main-yellow" :name="icon" />
      </div>
      <div class="flex mb-2">
        <div class="text-lg font-semibold">
          {{ title }}
        </div>
        <div class="ml-auto text-sm font-semibold">
          {{ duration }}
        </div>
      </div>
      <div class="mb-2">
        {{ company }}
      </div>
      <p v-html="description" class="text-justify mb-2">
      </p>
      <div v-if="!!images">
<!--        {{ item.images }}-->
      </div>
      <div v-if="!!link1" class=" xl:mt-auto">
          <a class="hover:text-main-yellow font-semibold" :href="link1" target="_blank">Link</a>
      </div>
    </div>

</template>

<script lang="ts" setup>
const props = defineProps(['icon','title','duration','description','company','images','link1'])
</script>

<style scoped>

</style>