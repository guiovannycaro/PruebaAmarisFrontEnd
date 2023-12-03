<template>
  <label for="" class="grid ">


    <q-file v-model="value" outlined :filter="checkFileSize" use-chips multiple class="h-full">
      <template v-slot:error>
        Please use a maximum value of 30.
      </template>
    </q-file>
    <figure v-if="!value" class="flex tw-items-center tw-justify-center">
      <div>
        <q-icon name="add_to_drive" color="grey-6" size="1.5rem"></q-icon>
        <b class="block">Clic aquí para
          cargar sus archivos</b>
        <p class="text-grey-7">Peso máximo de 2MB</p>
      </div>
    </figure>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue: any,
}>()

const emit = defineEmits(['update:modelValue'])

const vs = ref(null)

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {

    emit('update:modelValue', val)
  }
})

function checkFileSize(files: any) {
  return files.filter((file: any) => file.size > (1024 * 2 * 2))
}

</script>

<style scoped>
.grid {
  display: grid;
  height: 160px;
  /* place-content: center; */
}

.grid>* {
  grid-area: 1/1;

}

.grid>figure {
  text-align: center;
}

.q-field__control {
  height: 100% !important;
}

.h-full {
  height: 100%;
}
</style>

<style >
.grid .q-field--auto-height .q-field__control {
  height: 100% !important;
}
</style>