<template>
  <div>
    <BreadCrumbs :crumbs="routes" />

    <div class="tw-flex tw-justify-between tw-items-center tw-py-4">
      <div class="pl-4 tw-font-bold tw-text-3xl tw-my-5 text-bold">
        Administration Of users
      </div>
      <a href="users/crear">
        <q-btn label="Create Users" color="secondary" icon="add" class="tw-h-10 tw-rounded-lg"
        @click="router.push('/amaris/users/crear')"
        />
      </a>
    </div>


    <q-card class="tw-rounded-xl tw-p-7 " flat>

      <p class="tw-text-2xl tw-font-bold">Filters</p>

      <q-form ref="CotizacionesForm" class="tw-mt-6">

        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/4">
            <p class="tw-text-label">Códe User</p>
            <q-input outlined v-model="camposSearch.userId" :options="options" label="Codigo Usuar" dense/>
          </div>
        </div>



        <div class="row tw-flex tw-justify-center tw-gap-6 [&>*]:tw-p-2 tw-mt-12">
          <q-btn label="Clean filters" @click="limpiar" color="accent" textColor="secondary" class="tw-rounded-lg col-2"></q-btn>
          <q-btn label="Saerch" @click="Buscar" color="secondary" class="tw-rounded-lg col-2"></q-btn>
        </div>
      </q-form>
    </q-card>
    <q-card class="q-pa-md tw-mt-4 tw-rounded-xl" flat>
      <div class="col row">
        <p class="tw-text-2xl tw-pl-6">List Of Users</p>
      </div>
      <Table :TABLE_HEADER="SUBSERIES_HEADER" :TABLE_BODY="data" :selection="undefined" />
    </q-card>
    <Modal v-model="showModal" title="Asignación exitosa"
      text="Se ha asignado con éxito los tipos documentales a la dependencia x." is-success text-button="¡Ok!" />
  </div>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { Ref, ref,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs.vue';

import FileModal from 'components/Modal/FileModal.vue';
import Modal from 'components/Modal/Modal.vue';
import Table from 'src/components/Table.vue';
import Datepicker from 'components/FormFields/datePickerComponent.vue';
import TimePicker from 'components/FormFields/timePickerComponent.vue';
import { SUBSERIES_HEADER } from ".";

import service from "../../../../services/UsersService"
import client from "../../../../services/Api"

import { response } from 'express';
import { list } from 'postcss';
import { isTemplateNode } from '@vue/compiler-core';


interface Filters {
  iduser: number;
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Filtros {
  iduser: number;
  userId: number;
  id: number;
  title: string;
  body: string;
}


interface UserFromBack {
  id: number
  codigoRol: number
  nombreCompleto: string
}



const amparos = ref([true])
const options = ref([])
const file = ref()

const q = useQuasar();
const route = useRoute()
const router = useRouter()
const showModal = ref(false)

const data = ref([]);
const databd = ref([]);
const loadTable = ref(0);
let response:any[] = [];

const datos = [
  {
    iduser: 0,
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
]



const filtersSearch: Ref<Filters> = ref({
  iduser: 0,
  userId: 0,
  id: 0,
  title: "",
  body: "",
});

const camposSearch: Ref<Filtros> = ref({
  iduser: 0,
  userId: 0,
  id: 0,
  title: "",
  body: "",
});

const d = onMounted   (async() =>{
 const posts = await service.UsersListar();
console.log(posts)


        data.value = posts

})

const Buscar = async (e: any) => {
   e.preventDefault();
   console.log(camposSearch.value);
   const datos  = await service.UsersSearchId(camposSearch.value);

   console.log(datos)





}

const limpiar =  (e: any) => {
  data.value = response;
  loadTable.value ++
}

const routes = [
  {
    name: 'Inicio',
    to: '/home'
  },
  {
    name: 'Módulo Amaris',
    to: '/home'
  },
  {
    name: 'Clasificación',
    to: '/home'
  },
  {
    name: 'users'
  }
]


</script>

<style lang="scss">
.step_circle {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  padding: 10px;
}
</style>
