<template>
  <div>
    <BreadCrumbs :crumbs="routes" />

    <div class="tw-flex tw-justify-between tw-items-center tw-py-4">
      <div class="pl-4 tw-font-bold tw-text-3xl tw-my-5 text-bold">
        Administration Of Employee
      </div>
      <a href="employee/crear">
        <q-btn label="Create Employee" color="secondary" icon="add" class="tw-h-10 tw-rounded-lg"
        @click="router.push('/amaris/employee/crear')"/>

      </a>
    </div>


    <q-card class="tw-rounded-xl tw-p-7 " flat>

      <p class="tw-text-2xl tw-font-bold">filters</p>

      <q-form ref="CotizacionesForm" class="tw-mt-6">

        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/4">
            <p class="tw-text-label">Códe Employee</p>
            <q-input outlined v-model="filtersSearch.employeeId" :options="options" label="Code Employee" dense/>
          </div>
        </div>

        <div class="row tw-flex tw-justify-center tw-gap-6 [&>*]:tw-p-2 tw-mt-12">
          <q-btn label="Clear Filter" @click="limpiar" color="accent" textColor="secondary" class="tw-rounded-lg col-2"></q-btn>
          <q-btn label="Search" @click="Buscar" color="secondary" class="tw-rounded-lg col-2"></q-btn>
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
import { Ref, ref ,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs.vue';
import FileModal from 'components/Modal/FileModal.vue';
import Modal from 'components/Modal/Modal.vue';
import Table from 'src/components/Table.vue';
import Datepicker from 'components/FormFields/datePickerComponent.vue';
import TimePicker from 'components/FormFields/timePickerComponent.vue';
import { SUBSERIES_HEADER } from ".";

import service from "../../../../services/EmployeeService"
import client from "../../../../services/Api"

import { response } from 'express';
import { list } from 'postcss';
import { isTemplateNode } from '@vue/compiler-core';


interface Filters {
  employeeId: number;
  idService: number;
  employeeName: string;
  employeeSalary: number;
  employeeAge: number;
  profileImage: string;
}


interface Filtros {
  employeeId: number;
  idService: number;
  employeeName: string;
  employeeSalary: number;
  employeeAge: number;
  profileImage: string;
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
    employeeId: 0,
    idService: 0,
    employeeName: "",
    employeeSalary: 0,
    employeeAge: 0,
    profileImage: ""
  },
]



const filtersSearch: Ref<Filters> = ref({
  employeeId: 0,
  idService: 0,
  employeeName: "",
  employeeSalary: 0,
  employeeAge: 0,
  profileImage: "",
});

const camposSearch: Ref<Filtros> = ref({
    employeeId: 0,
    idService: 0,
    employeeName: "",
    employeeSalary: 0,
    employeeAge: 0,
    profileImage: ""
});

const d = onMounted   (async() =>{
 response = await service.EmployeeListar();

        data.value = response.map((item)=>({
            ...item,
               id:item.iduser
            })
           )
})

const Buscar = async (e: any) => {
   e.preventDefault();
   const datos  = await service.EmployeeSearchId(
    camposSearch.value

    );

    if(datos.length == 0){
  showModal.value = true
}else{
  data.value = datos;
      loadTable.value ++

}

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
    name: 'employee'
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
