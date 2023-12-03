<script lang="ts" setup >
import { onMounted, ref } from 'vue'
import womenlogin from "assets/women-login.svg"
import proLinkTicLogo from "assets/ProLinkTic.svg"
import loginImg from "assets/final-login.svg"
//import triggerError from './components/trigger-error.vue';
import service from "../services/LoginService"

import client from "../services/Api"

const user = ref("")
const pass = ref("")

const isPwd = ref(false)

const error = ref(false)


const errorHandler = (e: any) => {
  e.preventDefault()
  error.value = true
}
onMounted(() => {
  console.log(client)
  client().get('/pokemon/ditto')
})


const loginHandler = (e: any) => {
  e.preventDefault()
  service.login(user.value, pass.value)
}
</script>


<template>
  <section class="tw-min-h-screen  tw-h-full tw-flex tw-flex-col md:tw-flex-row ">
    <!-- SECCION IZQUIERDA IMAGEN-->
    <div class="tw-w-full">
      <div class="tw-relative tw-h-full tw-bg-blue-linktic">
        <img :src="womenlogin" class="tw-w-full tw-h-full tw-object-cover tw-bg-[#00A0FF] tw-object-left" alt="woman">
        <div class="tw-absolute tw-top-1/2 tw-left-14 tw-transform tw--translate-y-1/2">
          <h1 class="tw-text-white tw-font-semibold tw-text-3xl md:tw-text-6xl tw-text-left tw-mb-4">Bienvenido<br>de
            nuevo</h1>
          <p class="tw-text-white tw-text-base md:tw-text-xl tw-text-left tw-pr-6 tw-pb-8 tw-max-w-xs">En esta plataforma
            podrás Lorem Ipsum
            dolor sit amet</p>
          <a href="#"
            class="tw-text-blue-linktic tw-hidden sm:tw-block tw-text-center tw-bg-white tw-font-semibold tw-py-3 tw-mr-20 tw-rounded-md">¿Necesitas
            ayuda?</a>
        </div>
      </div>
    </div>
    <!--END BLOCK-->

    <!--SECCION DERECHA INICIAR SESION-->
    <div class="tw-flex tw-flex-col tw-mx-auto tw-bg-white tw- tw-z-50" style="width: 80%">
      <div class="tw-p-10 tw-mx-auto md:tw-mr-0">
        <img :src="proLinkTicLogo" alt="logo-linktic">
      </div>

      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <div class="tw-mx-auto tw-w-11/12 md:tw-w-10/12 lg:tw-w-3/5">
          <h1 class="tw-text-4xl tw-text-gray-texts tw-text-center">Completa tus datos<br> para ingresar</h1>

          <form class="tw-pt-3">

            <!-- AQUÍ DEBE IR EL TRIGGER ERROR  -->
            <trigger-error v-if="error" />
            <!-- AQUÍ DEBE IR EL TRIGGER ERROR -->

            <div class="tw-py-6">
              <label for="username" class="tw-block tw-text-gray-inputs tw-text-lg tw-mx-2 tw-mb-1">Usuario</label>
              <div class="tw-relative">

                <q-input type="text" id="username" name="username" placeholder="Ingrese su email" required
                  class=" tw-rounded-xl tw-py-3  tw-w-full tw-shadow-sm tw-border-gray-inputs" v-model="user" outlined>
                  <template v-slot:prepend>
                    <q-icon name="o_mail" />
                  </template>
                </q-input>
              </div>
            </div>

            <div>
              <label for="username" class="tw-block tw-text-gray-inputs tw-text-lg tw-mx-2 tw-mb-1">Contraseña</label>
              <div class="tw-relative">
                <q-input v-model="pass" :type="isPwd ? 'password' : 'text'" hint="Password with toggle" id="password"
                  name="password" placeholder="Ingrese su Ingrese su clave" required
                  class=" tw-rounded-xl tw-py-3 tw-w-full tw-shadow-sm" outlined>
                  <template v-slot:prepend>
                    <q-icon name="o_lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                      @click="isPwd = !isPwd" />
                  </template>
                </q-input>

              </div>
            </div>

            <div class="tw-flex tw-flex-col">

              <a href="#" class="tw-font-semibold tw-text-blue-linktic tw-ml-auto tw-mt-2">¿Olvidaste tu contraseña?</a>

              <div class="tw-flex tw-items-center tw-justify-center tw-mr-auto tw-pt-5">
                <label for="remember" class="tw-flex tw-items-center">
                  <input type="checkbox" id="remember" name="remember"
                    class="tw-h-6 tw-w-6 tw-border tw-border-gray-inputs tw-mr-2">
                  <span class="tw-text-gray-texts">Recordar mi clave</span>
                </label>
              </div>

              <button type="submit" @click="loginHandler"
                class="tw-flex tw-justify-center tw-items-center tw-w-auto tw-bg-blue-linktic tw-text-white tw-py-3 tw-rounded-lg tw-font-semibold tw-mt-5">Ingresar</button>
              <a href="#" class="tw-font-bold tw-text-blue-intense tw-mx-auto tw-my-8">Registrarme</a>
            </div>
          </form>
          <!--END FORM-->

        </div>
        <p
          class="tw-text-gray-texts tw-text-center tw-text-sm tw-mx-w-full tw-pt-10 tw-pb-6 tw--mx-2 md:tw-mx-0 md:tw-px-5">
          © 2023 Todos los
          derechos reservados. Desarrollado por LinkTIC</p>
      </div>

      <!--IMAGEN HOJAS-->
      <div class="tw-relative tw-mt-auto">
        <img :src="loginImg" alt="final-login" class="tw-w-1/2 tw-absolute tw-bottom-0 tw-right-0">
      </div>

    </div>
  </section>
  <!--END BLOCK-->
</template>