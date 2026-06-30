<template>
  <div class="flex justify-center items-center w-full px-4 xl:px-8">
    <h3 :class="tit=='Publications'? '!text-secondary-white':''"
        class="heading-page flex-none text-center mr-4 xl:mr-8">
      {{ tit }}
    </h3>
    <div class="border-b flex-1 h-1  border-main-yellow"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['tit'])
</script>

<style scoped>

</style>