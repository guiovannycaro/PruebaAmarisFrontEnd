<template>
  <q-input outlined v-model="dateTime" mask="time" :rules="inputValidate()" dense>
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time v-model="dateTime">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup lang="ts">

import { ref, watch } from "vue";

const props = defineProps<{
  inputDataProp?: any,
  disabled?: boolean,
  required?: boolean
}>();

const dateTime = ref();

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

watch(dateTime, (newTimePicker) => {
  dateTime.value = newTimePicker
  emit('update:inputDataProp', dateTime.value)
});
</script>
