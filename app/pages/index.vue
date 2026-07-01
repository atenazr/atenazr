<template>
  <div class="w-full ">
    <div class="w-full">
      <div id="banner" class="w-full min-h-dvh bg-no-repeat bg-center bg-cover">
      <div class="w-full min-h-dvh relative">
        <div class="text-secondary-white w-full h-full absolute top-1/2 ">
          <div class="w-full flex flex-col items-center justify-center">
            <div class="text-center text-2xl md:text-3xl xl:text-5xl font-bold">
              <span class="text-main-yellow">F</span>ATEMEH <span class="text-main-yellow">Z</span>ARE
            </div>
            <div class="mt-3 xl:mt-6 text-center text-lg xl:text-xl font-script">
              Researcher <span class="mx-1 inline-block w-[6px] xl:w-[10px] h-[6px] xl:h-[10px] bg-white rounded-full"></span>
              Developer <span class="mx-1 inline-block w-[6px] xl:w-[10px] h-[6px] xl:h-[10px] bg-white rounded-full"></span> Teacher
            </div>
            <div class="my-2 xl:my-4 text-center text-lg xl:text-xl font-script">
              CREATING INTELLIGENT SYSTEMS FOR HUMAN-CENTERED FUTURE
            </div>
            <div class="flex justify-center align-center">
                <a target="_blank" class="p-1 mx-2" v-for="item in socialMedia" :key="item.id" :href="item.link" >
                  <nuxt-icon class="text-[22px] xl:text-[28px] hover:text-main-yellow duration-[0.5s]" :name="item.icon" />
                </a>
            </div>

            <MainBtn internal="" link="https://drive.google.com/file/d/1Yi5JwQ0r6DwBRZDUL9UQFHUnLtUWUyvi/view?usp=sharing"
                     text="Download CV" />

          </div>
          </div>
        </div>
      </div>
    </div>

    <div  id="about" class="container p-4 xl:p-8 w-full bg-white">
      <div class="w-full flex flex-col-reverse md:flex-row items-center justify-center p-4 xl:p-8 ">

        <div  class="mr-6 xl:mr-12 w-full xl:max-w-1/2 flex flex-col p-1 xl:p-2">
            <h3 class="heading-page">
              About
            </h3>
            <p v-html="personalData.about" class="text-main-gray text-sm xl:text-lg text-justify">
            </p>
          </div>

        <div class="shadow-[0px_4px_25px_0px_rgba(27,39,71,0.15)] border border-[rgba(27,39,71,0.5)]
        w-[180px] md:w-[280px] xl:w-[360px] bg-center bg-cover h-[180px] md:h-[280px] xl:h-[360px] rounded-full bg-[url('/assets/images/me.png')]">
        </div>
      </div>

    </div>

    <div id="education" class=" w-full p-4 xl:p-8 bg-secondary-white"></div>
    <div  class=" w-full py-2 xl:py-4 px-4 xl:px-8 bg-secondary-white">
      <div class="container flex flex-col justify-center items-center">
        <HeadingTitle tit="Education" />
        <div class="flex flex-wrap justify-start align-center px-2 xl:px-8">
            <div class="w-full xl:w-1/2 p-2 xl:p-8 text-main-dark-blue" v-for="item in education" :key="item.id">

              <div class="card py-2 xl:py-4 px-3 xl:px-6 flex flex-col justify-center items-start">
                  <div class="mb-2 xl:mb-4">
                    <nuxt-icon class="text-[28px] text-main-yellow" name="book" />
                  </div>
                  <div class="flex flex-col md:flex-row text-sm xl:text-base w-full mb-2">
                      <div class="text-base xl:text-lg font-semibold">
                        {{ item.title }}
                      </div>
                      <div class="mt-2 md:mt-0 ml-auto text-sm font-semibold">
                        {{ item.duration }}
                      </div>
                  </div>

                  <div class="text-sm flex-col xl:flex-row xl:text-base flex mb-2 w-full">
                      <div class="">
                        {{ item.institution }}
                      </div>
                      <div class="mt-2 xl:mt-0 ml-auto font-semibold">
                        GPA:
                        {{ item.gpa }}
                      </div>
                  </div>

                  <div  class="w-full xl:h-[220px] flex flex-col ">
                      <div class="flex my-2">
                          <div class="text-sm xl:text-base font-semibold mr-1">
                              Courses:
                          </div>
                          <div class="text-sm xl:text-base">
                            {{ item.courses }}
                          </div>
                      </div>
                      <div class="flex my-2">
                        <div class="text-sm xl:text-base font-semibold mr-1">
                          Highlights:
                        </div>
                        <div class="text-sm xl:text-base italic">
                          {{ item.awards }}
                        </div>
                      </div>
                      <div class="text-sm xl:text-base flex mb-1 mt-auto">
                          <div class="font-semibold mr-1">
                            Thesis:
                          </div>
                          <div>
                            {{ item.thesis }}
                          </div>
                      </div>
                      <div class="flex text-sm xl:text-base my-2">
                        <div class="font-semibold mr-1">
                          Advisors:
                        </div>
                        <div>
                          {{ item.supervisors }}
                        </div>
                      </div>

                  </div>
              </div>

            </div>
        </div>
      </div>
    </div>

    <div id="skills" class="w-full bg-white p-4 xl:p-8"></div>
    <div class=" w-full bg-white text-main-dark-blue py-2 xl:py-4 px-4 xl:px-8">
        <div class="w-full container">
            <HeadingTitle tit="Skills" />
            <Skills />

            <div class="text-center text-sm md:text-base font-semibold mb-2 mt-2 xl:mb-4">
              For detailed information, Go to
              <span class="hover:text-main-yellow">
                <router-link to="/experience" > Experience page</router-link>
              </span>
            </div>
        </div>
    </div>

    <publications />

  </div>
</template>

<script setup lang="ts">
import { personalData } from "../assets/data/personal-data";
import { socialMedia } from "../assets/data/social-media";
import { education } from "../assets/data/education";
import HeadingTitle from "../componenets/utils/HeadingTitle.vue";
import Skills from "../componenets/Skills.vue";
import MainBtn from "../componenets/utils/MainBtn.vue";
import Publications from "../componenets/Publications.vue";


</script>

<style scoped>
#banner{
  background:linear-gradient(125deg,rgba(30,30,75,50%) 15%, rgba(92,92,119,30%) 30%),
  url('/assets/images/damavand.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>