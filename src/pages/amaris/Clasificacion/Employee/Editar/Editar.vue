<template>
  <div>
    <BreadCrumbs :crumbs="routes" />

    <div class="pl-4 tw-font-bold tw-text-3xl tw-my-5 text-bold">
      Edit Employee
    </div>

    <q-card class="tw-rounded-lg tw-p-7" flat style="height: 800px">

      <p class="tw-text-2xl tw-font-bold">Employee</p>

      <q-form ref="CotizacionesForm" class="tw-mt-6 tw-h-full" @submit.prevent="Actualizar">

        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Id</p>
            <q-input outlined v-model="filtersSearch.employeeId" :options="options" label="Id" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRules
            ]"/>
          </div>
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Code Server</p>
            <q-input outlined v-model="filtersSearch.idService" :options="options" label="Code Server" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRules
            ]"/>
          </div>
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Employee Salary</p>
            <q-input outlined v-model="filtersSearch.employeeSalary" :options="options" label="Employee Salary" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRules
            ]"/>
          </div>
        </div>



        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/3">
            <p class="tw-text-label tw-font-bold">Employee Salary</p>
            <q-input outlined v-model="filtersSearch.employeeSalary" :options="options" label="Employee Salary" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRules
            ]"/>
          </div>
          <div class="tw-w-1/3">
            <p class="tw-text-label tw-font-bold">Employee Age</p>
            <q-input outlined v-model="filtersSearch.employeeAge" :options="options" label="Employee Age" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRules
            ]"/>
          </div>
          <div class="tw-w-1/3">
            <p class="tw-text-label tw-font-bold">Profile Image</p>
            <q-input outlined v-model="filtersSearch.profileImage" :options="options" label="Profile Image" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRules
            ]"/>
          </div>
        </div>

        <div class="container-buttons  q-gutter-x-md">
          <q-btn   @click="Cancelar" label="Cancelar"  style="width: 240px; color: #003352" class="tw-rounded-xl tw-bg-blue-lighter" />
          <q-btn type="submit" text-color="white" style="width: 240px;" class="tw-rounded-xl tw-p-2 tw-bg-blue">Guardar cambios</q-btn>
        </div>
      </q-form>
    </q-card>

    <Modal
    v-model="errorModal"
    title="Error"
    text="¡Ha ocurrido un error, vuelta a intentarlo!"
    :is-success="false"
    text-button="Aceptar"
  ></Modal>

  <q-dialog v-model="showModal">
    <q-card class="tw-px-3" style="width: 480px; height: 396px">
      <div class="tw-rounded-lg tw-flex tw-justify-center tw-mt-10">

        <span class="tw-rounded-[50px] tw-flex tw-justify-center"
          style="background-color: rgba(255, 197, 13, 0.1); width: 130px; height: 82px">
          <img :src="Check" alt="check" width="40">
        </span>

      </div>
      <q-card-section class="flex column justify-center items-center">
        <p class="tw-text-2xl text-center tw-font-bold q-mt-lg">
          Edition exit
        </p>
        <p class="tw-text-lg text-center tw-mt-3">The employee Was Edit ?</p>

        <div class="tw-flex tw-mt-8">

          <q-btn  label="¡Ok!" @click="regresar"  style="width: 210px;border: 1px solid #006fb0;background-color: #006fb0;color: #fff; margin-left: 10px;" v-close-popup/>

        </div>

      </q-card-section>
    </q-card>
  </q-dialog>


  <q-dialog v-model="cancelarModal">
    <q-card class="tw-px-3" style="width: 480px; height: 396px">
      <div class="tw-rounded-lg tw-flex tw-justify-center tw-mt-10">

        <span class="tw-rounded-[50px] tw-flex tw-justify-center"
          style="background-color: rgba(255, 197, 13, 0.1); width: 130px; height: 82px">
          <img :src="CheckYellow" alt="check" width="40">
        </span>

      </div>
      <q-card-section class="flex column justify-center items-center">
        <p class="tw-text-2xl text-center tw-font-bold q-mt-lg">
            Error Message
        </p>
        <p class="tw-text-lg text-center tw-mt-3">Your sure of cancel this action ?</p>

        <div class="tw-flex tw-mt-8">
          <q-btn label="No"  style="width: 30px;background-color: #e22d20; border: 1px solid #e22d20;" text-color="white"   v-close-popup/>
          <q-btn  label="Si" @click="regresar"  style="width: 30px;border: 1px solid rgb(113 128 206);background-color: #485ece;color: #fff; margin-left: 10px;" v-close-popup/>

        </div>

      </q-card-section>
    </q-card>
  </q-dialog>









  </div>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { Ref, ref ,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs.vue';
import Modal from 'components/Modal/Modal.vue';
import Datepicker from 'components/FormFields/datePickerComponent.vue';
import TimePicker from 'components/FormFields/timePickerComponent.vue';

import { SUBSERIES_HEADER } from "pages/amaris/Clasificacion/Employee";
import Check from '../../../../../assets/check.svg';
import CheckYellow from '../../../../../assets/check-yellow.svg';

import service from "../../../../../services/EmployeeService"

import client from "../../../../../services/Api"

import { METHODS } from 'http';


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

const q = useQuasar();
const route = useRoute()
const router = useRouter()
const showModal = ref(false)
const errorModal = ref()
const cancelarModal =ref()
const selectOptions = ref([])

const data = ref([]);
const int = ref();
let list:any[] = [];
int.value = route.params.id;
console.log(route.params);


const validationRules = (val: any) => {
  if (val.length ===  0) {
    return 'Este campo es requerido'
  }

  if (val.length >  5) {
    return 'Este campo solo admite hasta cinco carateres';
    val.innerHTML = "";
  }

}




const filtersSearch: Ref<Filters> = ref({
  employeeId: 0,
  idService: 0,
  employeeName: "",
  employeeSalary: 0,
  employeeAge: 0,
  profileImage: "",
});

const routes = [
  {
    name: 'Inicio',
    to: '/'
  },
  {
    name: 'Módulo Amaris',
    to: '/'
  },
  {
    name: 'Clasificación',
    to: '/'
  },
  {
    name: 'employee',
    to: '/'
  },
  {
    name: 'Edit Employee',
  }
]

const Cancelar = (e: any) => {
  cancelarModal.value = true;
}

const regresar = (e: any) => {
  window.history.back();
}


const d = onMounted   (async() =>{
  let data = await service.EmployeeSearchId({ "employeeId": filtersSearch.value.employeeId});
  console.log('**************0');
  console.log(data);
  console.log('**************0');

  filtersSearch.value = data;

})

const Actualizar = () => {

const response = service.EmployeeActualizar({
  ...filtersSearch.value,
  employeeId: Number(route.params.id)
})
if (response?.status === 200) {
  errorModal.value = true;


} else {

  showModal.value = true;

}

}

</script>

<style lang="scss">
.container-buttons {
  display: flex;
  justify-content: center;
  margin-top: 180px;
}
</style>

