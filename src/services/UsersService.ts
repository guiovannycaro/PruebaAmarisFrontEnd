import Api from './Api';
import jwt_decode from 'jwt-decode';
import { api } from 'boot/axios';
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

      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };


      console.log('Listar Usuarios');
      const url = '/amaris/Servicio/Users/listUser';

      console.log('url');

      const { data } = await api.get(url, { headers });
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

      const url = '/amaris/Servicio/Users/';
      console.log('url');
      const baseURL = url + 'addUser/';




      const data = await api.post(baseURL, radicadoJson, { headers });
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
      const url = '/amaris/Servicio/Users/';
      console.log('url');
      const baseURL = url + 'editUser/';


      const { data } = await api.post(baseURL, radicadoJson, { headers });

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

      console.log('Buscar  usuarios Por Id');
      const url = '/amaris/Servicio/Users/';

      const baseURL = url + 'listUserById/';
      console.log('esta es la info que se envia ' + radicadoJson);


      const { data } = await api.get(baseURL, radicadoJson, { headers });

      console.log('estos son los datos de la busqueda ' + data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },
};
