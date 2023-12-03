import Api from './Api';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { Ref, ref } from 'vue';

interface Filters {
  iduser: number;
  userId: number;
  id: number;
  title: string;
  body: string;
}

const filtersSearch: Ref<Filters> = ref({
  iduser: 0,
  userId: 0,
  id: 0,
  title: '',
  body: '',
});

export default {
  name: 'users',
  data() {
    users: [];
  },

  async UsersListar(): Promise<any> {
    try {
      console.log('Listar Usuarios');
      const url = 'localhost:8080/amaris/Servicio/Users/listUser';

      console.log('url');

      var axios = require("axios");

      const axiosInstance = axios.create({
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });

      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error: any) {

      console.log('Error del error');
    }
  },

  async UsersInsertar(radicadoJson: any): Promise<any> {
    try {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };

      console.log('Insertar Users');

      const url = 'localhost:8080/amaris/Servicio/Users/';
      console.log('url');
      const baseURL = url + 'addUser/';




      const data = await axios.post(baseURL, radicadoJson, { headers });
      console.log(data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },

  async UsersActualizar(radicadoJson: any): Promise<any> {
    try {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };

      console.log('Actualizar Users');
      const url = 'localhost:8080/amaris/Servicio/Users/';
      console.log('url');
      const baseURL = url + 'editUser/';




      const { data } = await axios.post(baseURL, radicadoJson, { headers });

      console.log(data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },

  async UsersSearchId(radicadoJson: any): Promise<any> {
    try {
      console.log('visto desde el servico' + radicadoJson);
      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };

      console.log('Buscar  Dependencia Por Id');
      const url = 'localhost:8080/amaris/Servicio/Users/';
      console.log('url');
      const baseURL = url + 'istUserById/';



      const { data } = await axios.post(baseURL, radicadoJson, { headers });

      console.log(data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },
};
