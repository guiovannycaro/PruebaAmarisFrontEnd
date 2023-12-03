<template>
  <main>
    <div class="tw-pl-4 tw-my-5">
      <h1 class=" tw-font-bold tw-text-3xl  text-bold">
        Bienvenido, Amaris
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>

    </div>
    <q-card flat class="q-pa-md">
      <h2 class="tw-text-xl">Módulos de Gestión.</h2>
      <p>Primero selecciona un módulo para realizar la gestión que deseas</p>
      <!-- cards section for modules  -->

      <q-section class="row q-mt-md tw-gap-8">
        <q-card :flat="!selected" bordered class="col-2 tw-rounded-xl">
          <q-item class="flex tw-justify-between">
            <q-item-section avatar>
              <q-avatar class="tw-rounded-2xl tw-bg-[#00A0FF]">
                <q-icon name="o_archive" color="white" size=""></q-icon>
              </q-avatar>
            </q-item-section>

            <q-item-section>

              <q-item-label caption class="flex tw-justify-end">
                <q-chip outline v-if="selected" icon="check_circle">Seleccionado</q-chip>
                <q-chip outline v-else>Seleccionar</q-chip>
              </q-item-label>
            </q-item-section>
          </q-item>



          <q-card-section horizontal>


            <q-card-section>
              <p class="tw-font-semibold">
                Módulo Administracion
              </p>
              <p class="block q-py-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

            </q-card-section>
          </q-card-section>
        </q-card>







        <q-card :flat="!selected" class="col-2  tw-rounded-xl">
          <q-item class="flex tw-justify-between">
            <q-item-section avatar>
              <q-avatar class="tw-rounded-2xl tw-bg-[#00B29A]">
                <q-icon name="code" color="white" size=""></q-icon>
              </q-avatar>
            </q-item-section>

            <q-item-section>

              <q-item-label caption class="flex tw-justify-end">
                <q-chip outline v-if="selected" icon="check_circle">Seleccionado</q-chip>
                <q-chip outline v-else>Seleccionar</q-chip>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-card-section horizontal>

            <q-card-section>
              <p class="tw-font-semibold">
                Módulo Gestor de Contenidos
              </p>
              <p class="block q-py-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

            </q-card-section>
          </q-card-section>
        </q-card>

        <q-card :flat="!selected" class="col-2  tw-rounded-xl">
          <q-item class="flex tw-justify-between">
            <q-item-section avatar>
              <q-avatar class="tw-rounded-2xl tw-bg-[#FF4937]">
                <q-icon name="verified_user" color="white" size=""></q-icon>
              </q-avatar>
            </q-item-section>

            <q-item-section>

              <q-item-label caption class="flex tw-justify-end">
                <q-chip outline v-if="selected" icon="check_circle">Seleccionado</q-chip>
                <q-chip outline v-else>Seleccionar</q-chip>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-card-section horizontal>

            <q-card-section>
              <p class="tw-font-semibold">
                Módulo de Seguridad
              </p>
              <p class="block q-py-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

            </q-card-section>
          </q-card-section>
        </q-card>
      </q-section>
    </q-card>
  </main>
</template>

<script setup lang="ts">

import { ref } from "vue";

const selected = false
</script>
