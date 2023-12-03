
<template>
  <div>
    <q-table flat :rows="TABLE_BODY" :columns="TABLE_HEADER" row-key="codigo" table-header-class="text-black text-h6 "
      class="q-mr-md full-width" rows-per-page-label="Páginas" selection="multiple" v-model:selected="selection" :filter="buscar">
      <template v-slot:body-cell-estado="props">
        <q-td class="text-center row tw-justify-center tw-items-center">

          <span class="tw-border tw-border-green-700 tw-bg-green-100   tw-rounded-xl col-8 tw-py-1">
            {{ props.row.estado }}
          </span>


        </q-td>


      </template>



      <template v-slot:body-cell-acciones="props">

        <q-td class="text-center">
          <q-btn size="sm" color="secondary" :icon="icon || 'edit'" flat @click="editRow(props.row.id)" />
        </q-td>

      </template>

    </q-table>
  </div>
</template>

<script setup lang="ts">

import { useQuasar } from "quasar";
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const vuerouter = useRouter()
const route = useRoute()

const q = useQuasar();

const selection = ref([])

const props = withDefaults(defineProps<{
  TABLE_BODY: any[],
  TABLE_HEADER: any[],
  selection: "none" | "single" | "multiple" | undefined,
  itemSelected: any[],
  icon: string,
  buscar: string,
  // action: string,
  // target?: string,
}>(), {
  selection: "none"
  // target: ""
})

const emit = defineEmits(['update:itemSelected'])

watch(selection, (newdateData) => {
  selection.value = newdateData
  emit('update:itemSelected', selection.value)
});

const fakeAlerta = ["alerta", "falso"];
// onMounted(() => {
//   console.log(props.action, props.POLIZA_BODY)
// })


function editRow(id: number) {
  vuerouter.push(route.path + '/editar/' + id)
}



</script>

<style lang="scss" scoped></style>

