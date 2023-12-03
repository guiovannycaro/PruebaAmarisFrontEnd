<template>
  <div>
    <BreadCrumbs :crumbs="routes" />

    <div class="pl-4 tw-font-bold tw-text-3xl tw-my-5 text-bold">
      Create User
    </div>

    <q-card class="tw-rounded-lg tw-p-7" flat style="height: 800px">

      <p class="tw-text-2xl tw-font-bold">User</p>

      <q-form ref="CotizacionesForm" class="tw-mt-6 tw-h-full" @submit.prevent="Insertar">

        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Códe User</p>
            <q-input outlined v-model="filtersSearch.iduser" :options="options" label="Dependencia" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRulesCodigoUser
            ]"/>
          </div>
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Códe Service</p>
            <q-input outlined v-model="filtersSearch.userId" :options="options" label="Serie" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRulesCodeService

            ]"/>
          </div>
        </div>

        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Id</p>
            <q-input outlined v-model="filtersSearch.id" :options="options" label="Dependencia" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRulesId

            ]"/>
          </div>
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Title</p>
            <q-input outlined v-model="filtersSearch.title" :options="options" label="Serie" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRulesTitle

            ]"/>
          </div>
        </div>

        <div class="tw-flex tw-full q-col-gutter-md">
          <div class="tw-w-1/2">
            <p class="tw-text-label tw-font-bold">Body</p>
            <q-input outlined v-model="filtersSearch.body" :options="options" label="Dependencia" dense :rules="[
              val=> val && val.length > 0 || 'Este Campo no debe estar vacio',
              validationRulesBody

            ]"/>
          </div>

        </div>


        <div class="container-buttons  q-gutter-x-md">
          <q-btn  @click="Cancelar" label="Cancel" style="width: 240px; color: #003352" class="tw-rounded-xl tw-bg-blue-lighter" />
          <q-btn   type="submit" label="Crear" text-color="white" style="width: 240px;" class="tw-rounded-xl tw-p-2 tw-bg-blue" />
        </div>
      </q-form>
    </q-card>

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
            Creación exitosa
          </p>



          <p class="tw-text-lg text-center tw-mt-3" >The User {{filtersSearch?.id }} {{filtersSearch?.title}} was create correctly.</p>

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
          <p class="tw-text-lg text-center tw-mt-3">You Sure Of Cancel The Creation Of User ?</p>

          <div class="tw-flex tw-mt-8">
            <q-btn label="No"  style="width: 30px;background-color: #e22d20; border: 1px solid #e22d20;" text-color="white"   v-close-popup/>
            <q-btn  label="Si" @click="regresar"  style="width: 30px;border: 1px solid rgb(113 128 206);background-color: #485ece;color: #fff; margin-left: 10px;" v-close-popup/>

          </div>

        </q-card-section>
      </q-card>
    </q-dialog>

    <Modal
    v-model="errorModal"
    title="Error"
    text="¡Ha ocurrido un error, vuelta a intentarlo!"
    :is-success="false"
    text-button="Aceptar"
  />


  </div>
</template>
<script lang="ts" setup>

import { useQuasar } from 'quasar';
import { Ref, ref,onMounted  } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs.vue';
import Modal from 'components/Modal/Modal.vue';
import Datepicker from 'components/FormFields/datePickerComponent.vue';
import TimePicker from 'components/FormFields/timePickerComponent.vue';
import { SUBSERIES_HEADER } from "pages/amaris/Clasificacion/Users";
import Check from '../../../../../assets/check.svg';
import CheckYellow from '../../../../../assets/check-yellow.svg';

import service from "../../../../../services/UsersService"

import client from "../../../../../services/Api"
import { domainToASCII } from 'url';

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



const q = useQuasar();
const route = useRoute()
const router = useRouter()
const showModal = ref(false)
const cancelarModal =ref()





const data = ref([]);
const crearDependencia = ref();
const errorModal = ref()
const selectOptions = ref([])



const filtersSearch: Ref<Filters> = ref({
  iduser: 0,
  userId: 0,
  id: 0,
  title: "",
  body: "",
});


const validationRulesCodigoUser = (val: any) => {
  if (val.length >  50) {
    return 'Este campo solo admite hasta cinco carateres';
    val.innerHTML = "";
  }

}


const validationRulesCodeService = (val: any) => {
  if (val.length >  50) {
    return 'Este campo solo admite hasta cinco carateres';
    val.innerHTML = "";
  }

}

const validationRulesId = (val: any) => {
  if (val.length >  50) {
    return 'Este campo solo admite hasta cinco carateres';
    val.innerHTML = "";
  }

}

const validationRulesTitle = (val: any) => {
  if (val.length >  50) {
    return 'Este campo solo admite hasta cinco carateres';
    val.innerHTML = "";
  }

}


const validationRulesBody = (val: any) => {
  if (val.length >  50) {
    return 'Este campo solo admite hasta cinco carateres';
    val.innerHTML = "";
  }

}







const routes = [
  {
    name: 'Inicio',
    to: '/'
  },
  {
    name: 'Módulo Amaris ',
    to: '/'
  },
  {
    name: 'Clasificación ',
    to: '/'
  },
  {
    name: 'users',
    to: '/'
  },
  {
    name: 'Crete User',
  }
]

const Cancelar = (e: any) => {
 cancelarModal.value = true;
}

const regresar = (e: any) => {
 window.history.back();
}

const d = onMounted   (async() =>{


});


const Insertar = () => {

 console.log('**************3');
 console.log(filtersSearch.value);
 console.log('**************3');



   const response = service.UsersInsertar({
     ...filtersSearch.value,
   });

   if (response?.status === 200) {


     errorModal.value = true;
     window.history.back();
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

