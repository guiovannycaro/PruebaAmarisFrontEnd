<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="tw-header tw-top-0 tw-flex tw-flex-grow">
      <div
        class="tw-flex tw-items-center tw-justify-between tw-w-full tw-bg-white tw-px-8 tw-h-24 tw-shadow-md tw-z-10 tw-">

        <div class="tw-flex tw-flex-row tw-justify-start tw-w-1/3 ">
          <!--SEARCH-->
          <q-input standout v-model="search" label="Buscar " dense class="tw-w-full  tw-overflow-hidden" rounded>
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <!--END SEARCH-->


        <div class="tw-flex tw-flex-row tw-justify-center tw-items-center">
          <q-select outlined v-model="model" label="SGDA" class="tw-w-1/2 tw-bg-[#E0F3FEB2]" dense>
            <template v-slot:prepend>
              <q-icon name="archive" />
            </template>
          </q-select>
          <div class="tw-mx-2 tw-sm:mx-3">
            <a href="#">
              <img class="tw-w-14" :src="tink" alt="LogoLinktic">
            </a>
          </div>

          <div class="md:tw-mr-5">
            <a href="#">
              <img class="tw-w-14" :src="interrogation" alt="Personal">
            </a>
          </div>

          <div class="tw-flex tw-flex-row tw-items-center">
            <div class="tw-flex-shrink-0 tw-px-2 tw--mr-3 tw-md:-mr-10 tw-h-full">
              <a href="#">
                <img class="tw-h-full" :src="mask" alt="Personal">
              </a>
            </div>

            <div
              class="tw-flex tw-flex-col tw-ml-5 tw-pl-5 tw-border-l tw-mx-0 tw-md:mx-12 tw-border-gray-inputs tw-leading-4">
              <div class="tw-flex tw-items-start tw-flex-col tw-pr-8 tw-sm:pr-0 tw-text-black">
                <p class="tw-text-base tw-">Guiovanny  Caro Daza</p>
                <p class="tw-text-gray-inputs tw-text-sm">Desarrollador Senior</p>
              </div>
            </div>

            <div class="tw-ml-auto tw-w-12">
              <a href="#">
                <img class="tw-min-w-2" :src="chevron">
              </a>
            </div>
          </div>
        </div>
      </div>
    </q-header>

    <!--ESTO PERMITE QUE EL MAIN ESTÉ DEBAJO DEL HEADER-->
    <div class="tw-flex tw-flex-col tw- tw-w-full">
      <!--END BLOCK-->

      <!--COMIENZO HEADER-->

      <!--END HEADER-->
      <q-drawer :mini="leftDrawerOpen" show-if-above bordered>
        <q-scroll-area class="fit">
        <section class="tw-flex tw-flex-row tw-pt-5 tw-px-2 tw-justify-between tw-items-center">
          <a href="#" class="" :class="leftDrawerOpen ? 'tw-hidden' : ''">
            </a>
          <q-btn flat round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        </section>
        <q-list>
          <q-item-label header>

          </q-item-label>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" color="grey-6" size="2rem" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>

          </q-item>
          <q-expansion-item icon="folder_open" label="Clasificación documental">
            <q-item clickable tag="a" :to="'/amaris' + item.href" v-for="item in links"
              class="tw-p-2 tw-px-6 tw-font-semibold tw-text-gray-400">


              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
                <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
        </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>

    <q-page-container class="tw-bg-background " style="min-height: 100vh; overflow-y: scroll">
      <router-view class="tw-p-[40px]" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import home from "assets/home.svg"
import lines from "assets/icon-lines.svg"
import chevron from "assets/chevron.svg"
import mask from "assets/mask.svg"
import interrogation from "assets/interrogation.svg"
import tink from 'assets/tink.svg'
import graphic from 'assets/graphic-icon.svg'
import branch from 'assets/branch.svg'

import menu from 'assets/menu.svg'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const links = ref([

  {
    href: "/users",
    label: 'Users'
  }, {
    href: "/employee",
    label: 'Employee'
  },

])

const leftDrawerOpen = ref(false)
const search = ref("")
const model = ref("")

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss">
.q-field--standout.q-field--highlighted .q-field__control {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  background-color: lightgray;
}
</style>
