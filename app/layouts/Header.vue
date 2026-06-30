<template>
<header class="w-full px-4 top-3 fixed z-20">
  <div class="container w-full  bg-main-yellow md:pt-4 rounded-3xl">
      <div class="md:hidden">
          <div @click="switchMenu" class=" md:hidden p-2 cursor-pointer">
            <nuxt-icon name="menu" class="text-main-dark-blue text-[28px]" />
          </div>
          <div @click="switchMenu"
               :class="showMenu? 'left-0 opacity-100' : 'left-[-340px] opacity-0'"
               class="w-1/2 absolute rounded-2xl overflow-hidden duration-[1.5s] ease-in-out top-[56px] border-t border-white  z-20">
            <div class="w-full">
                <div v-for="item in menus" :key="item.id" class="w-full">
                  <a class=" bg-secondary-white inline-block w-full font-bold  p-4  border-b border-main-dark-blue text-main-dark-blue hover:text-main-yellow"
                     v-if="item.name== 'Experience'" :href="item.link">
                    {{ item.name }}
                  </a>
                  <router-link class="bg-secondary-white w-full inline-block font-bold  p-4  border-b border-main-dark-blue text-main-dark-blue hover:text-main-yellow"
                      v-else :to="item.link">
                    {{ item.name }}
                  </router-link>
                </div>
            </div>
          </div>
      </div>
      <div class="container hidden md:flex w-full align-center justify-start">
          <div v-for="item in menus" :key="item.id"
               class="text-white border-transparent font-bold xl:text-base border-b-4 hover:border-main-gray duration-[0.2s] mx-2.5 xl:mx-5 pb-2 xl:pb-4 px-1 xl:px-2 ease-in-out  hover:text-main-dark-blue hover:opacity-75">
            <a v-if="item.name== 'Experience'" :href="item.link">
              {{ item.name }}
            </a>
            <router-link
                v-else :to="item.link">
              {{ item.name }}
            </router-link>
          </div>
      </div>
  </div>
</header>
</template>

<script setup lang="ts">
import {ref} from "vue";

const showMenu = ref(false)
const switchMenu=function(){
  showMenu.value = !showMenu.value
}

const menus=[
  {
    id:0,
    name:'Home',
    link:'/'
  },
  {
    id:1,
    name:'Education',
    link:'/#education'
  },
  {
    id:2,
    name:'Experience',
    link:'/experience'
  },
  {
    id:3,
    name:'Skills',
    link:'/#skills'
  },
  {
    id:3,
    name:'Publications',
    link:'/#publications'
  }
]

</script>

<style scoped>

</style>