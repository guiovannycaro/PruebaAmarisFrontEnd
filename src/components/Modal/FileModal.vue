<template>
  <template>
    <q-dialog v-model="open">
      <q-card class="tw-px-3" style="width: 850px; height: 550px; border-radius: 20px;">

        <q-card-section class="flex  tw-gap-4 !tw-text-left">
          <p class="tw-text-2xl tw-text-left tw-font-bold q-mt-lg">
            {{ title }}
          </p>

          <p class="tw-text-base tw-text-left tw-mt-2 tw-text-gray-500">{{ text }}</p>

          <div class="tw-w-full tw-p-4 tw-rounded-lg tw-flex tw-justify-between" style="border: 1px solid rgba(107, 114, 128, 0.4)">
            <span class="flex tw-gap-2">
              <figure>
                <img :src="Excel">
              </figure>
              <p>Formato del archivo.xsls</p>
            </span>
            <span class="text-[32px]">
              <q-icon class="" color="rgba(107, 114, 128, 0.4)" name="download"></q-icon>
            </span>
          </div>


          <div class="q-my-md tw-w-full">
            <span class="tw-text-gray-500 tw-font-semibold tw-px-2 ">Adjunte los documentos </span>
            <FileLoader class="tw-w-full" v-model="file" />
          </div>
          <div class="tw-flex flex-center tw-w-full">
            <q-btn label="Cancelar" color="secondary" class="tw-p-3" style="width: 210px;" flat @click="hideModal" />
            <q-btn :label="textButton" style="width: 210px" text-color="white" class="tw-rounded-xl tw-p-3 tw-bg-[#006FB0]"
              @click="handleButton" :disable="!file" />

          </div>

        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
</template>

<script setup lang="ts">
import FileLoader from '../FormFields/FileLoader.vue';
import { computed, ref } from 'vue';
import Excel from '../../assets/microsoft-excel.svg';
import Check from '../../assets/check.svg';
import CheckYellow from '../../assets/check-yellow.svg';

const props = defineProps<{
  title: string,
  text: string,
  textButton: string,

  modelValue: boolean,
  file: any
}>()

const emit = defineEmits(['closeModal', 'handleAccept', 'update:modelValue', 'update:file'])

function hideModal() {
  emit('update:modelValue', false)
}

function handleButton() {
  console.log(props.file)
  emit('handleAccept')
}

const open = computed({
  get() {
    return props.modelValue
  },
  set(value) {

    emit('update:modelValue', value)
  }
})

const file = computed({
  get() {
    return props.file
  },
  set(value) {

    emit('update:file', value)
  }
})

</script>
