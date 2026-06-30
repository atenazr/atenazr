<template>
  <div class="w-full">
    <div id="research"  class="w-full bg-secondary-white p-8" ></div>
    <div class="w-full bg-secondary-white py-2 xl:py-4 px-4 xl:px-8">
      <div class="container w-full">
            <HeadingTitle tit="Research"  />
            <div class="w-full flex flex-col xl:flex-row flex-wrap px-4 xl:px-8">
                <div class="w-full xl:w-1/2 p-4 xl:p-8 text-main-dark-blue"  v-for="item in research" :key="item.id">

                   <ExperienceCard icon="research"  :company="item.company" :title="item.title"
                   :description="item.description" :images="item.images? item.images : ''" :duration="item.duration" />
                </div>
            </div>
      </div>
    </div>

    <div class="w-full bg-secondary-white py-2 xl:py-4 px-4 xl:px-8">
      <div class="container w-full">
        <HeadingTitle tit="Teaching"  />
        <p class="w-full text-main-dark-blue px-6 xl:px-12 my-2 xl:my-4 text-justify">
          Since <strong>2020 </strong>, I have worked as a <strong> computer science teacher in vocational high schools </strong>. Teaching technical computing courses to high school students has helped me improve my communication skills and learn how to explain complex topics in a simple and structured way. It has also strengthened my ability to work with students with <strong>different levels of background knowledge </strong> and support them in <strong>practical, project-based learning </strong>. The courses I have taught during these years are listed below.
        </p>
        <div class="w-full text-main-dark-blue xl:h-[540px] flex p-4 xl:p-8">
            <div class="w-full xl:w-1/2 px-4 xl:px-8 h-full">
              <div class="card py-2 xl:py-4 px-3 xl:px-6 rounded-sm overflow-auto h-full">
                  <div class="font-semibold flex items-center">
                    <div>
                      <nuxt-icon class="text-[24px] xl:text-[36px] text-main-dark-blue" name="teaching" />
                    </div>
                    <div>Courses </div>
                  </div>
                  <div class="w-full bg-transparent text-main-dark-blue"  v-for="item in teaching" :key="item.id">

                    <div class="w-full py-2 xl:py-4 ">
                      <div class="flex w-full justify-center items-start mb-1 xl:mb-2">
                        <div class="font-semibold shrink-0 px-2 xl:px-4">
                          {{ item.semester }}
                        </div>

                        <ul class="font-semibold flex-1 text-center pl-4">
                          <li v-for="cc in item.courses" class="text-left">
                            {{ cc }}
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
            <div class="w-0 h-0  shadow-[0px_4px_25px_0px_rgba(27,39,71,0.15)] border border-[rgba(27,39,71,0.5)] xl:w-1/2 bg-center bg-cover xl:h-full rounded-sm bg-[url('/assets/images/class.jpg')]"></div>
        </div>
      </div>
    </div>

    <div class="w-full bg-secondary-white py-2 xl:py-4 px-4 xl:px-8">
      <div class="container w-full">
        <HeadingTitle tit="Work"  />
        <div class="w-full text-main-dark-blue flex flex-col xl:flex-row flex-wrap p-4 xl:p-8">
          <div class="w-full xl:w-1/2 p-4 xl:p-8 text-main-dark-blue"  v-for="item in work" :key="item.id">
            <ExperienceCard class="md:!h-[480px]" icon="work"  :company="item.company" :title="item.title" :link1="item.link"
                            :description="item.description" :images="item.images? item.images : ''" :duration="item.duration" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeadingTitle from "../componenets/utils/HeadingTitle.vue";
import { research,teaching,work } from "../assets/data/experience";
import ExperienceCard from "../componenets/utils/ExperienceCard.vue";
</script>

<style scoped>

</style>