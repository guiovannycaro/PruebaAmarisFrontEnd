<template>
  <q-table ref="myTable" :rows="BODY_TABLE" :columns="SUB_HEADER_TABLE" row-key="codigo" selection="multiple"
    v-model:selected="selected">
    <template v-slot:header="props">
      <tr>
        <th class="border-header" :colspan="colSpan" v-for="{ label, colSpan, } in COLUMN_TABLE" :key="label">
          {{ label }}
        </th>
      </tr>
      <tr>
        <th>
          <q-checkbox v-model="props.selected" color="secondary" />
        </th>
        <th class="border-header" v-for="item in props.cols">
          {{ item.label }}
        </th>
        <th>
        </th>
      </tr>
    </template>

    <template v-slot:body-selection="props">
      <th>
        <q-checkbox v-model="props.selected" color="secondary" />
      </th>
    </template>

    <template v-slot:body-cell-procedimiento="props">
      <div class="tw-flex  tw-flex-col tw-px-2 tw-py-4 tw-w-96">
        <p class="tw-text-center">
          {{ showTextTable(props.row.Procedimiento) }}
          {{ textTable }}
        </p>
        <div class="tw-flex tw-justify-end">
          <q-btn flat color="secondary" @click="expandContent(props.row.Procedimiento)" v-if="isCollapsed">Ver más</q-btn>
          <q-btn flat color="secondary" @click="collapseContent(props.row.Procedimiento, 300)" v-else>Ver menos</q-btn>
        </div>

      </div>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  COLUMN_TABLE: any[],
  BODY_TABLE: any[],
  SUB_HEADER_TABLE: any[],
  value: any,
}>()

const selected = ref([]);
const textTable = ref('');
const isCollapsed = ref(true);
const exitsText = ref();

const emit = defineEmits(['update:value'])

watch(selected, (selectedData) => {
  selected.value = selectedData
  emit('update:value', selected.value)
});

onMounted(() => {
  textTable.value = exitsText.value?.slice(0, 300);
})
const collapseContent = (text = '', shortenSize = 100) => {
  textTable.value = text.slice(0, shortenSize);
  isCollapsed.value = !isCollapsed.value;
}

const expandContent = (text = '') => {
  textTable.value = text;
  isCollapsed.value = !isCollapsed.value;
}

const showTextTable = (text = '') => {
  exitsText.value = text
}

</script>

<style lang="scss" scoped>
.border-header {
  border-color: rgba(0, 0, 0, 0.12);
  border-top: 10px;
  border-left: 0;
  border-bottom-width: 1px;
}

.border {
  border: transparent;
}
</style>
