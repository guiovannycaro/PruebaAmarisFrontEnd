<template>
  <q-input outlined v-model="dateData" mask="date"
           :rules="inputValidate()" class="col-6" :label="label" :disable="disabled" :dense="true"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="dateData">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';

const emit = defineEmits(['update:inputDataProp'])

function inputValidate(): Array<any> {
  const rules: any[] = [];
  if (!props.required) {
    rules.push((val: any) => {
      return true;
    });
    return rules;
  }
  rules.push((val: any) => {
    if (!(val && val.length > 0)) {
      return 'Este campo es requerido'
    }
  });

  return rules;
}
const props = defineProps<{
  inputDataProp?: any,
  disabled?: boolean,
  required?: boolean
}>()

//Variables
const dateData = ref()

//Metodos


watch(dateData, (newdateData) => {
  dateData.value = newdateData
  emit('update:inputDataProp', dateData.value)
});

</script>
