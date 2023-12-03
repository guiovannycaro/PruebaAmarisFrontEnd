import Api from './Api';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { Ref, ref } from 'vue';

interface Filters {
  employeeId: number;
  idService: number;
  employeeName: string;
  employeeSalary: number;
  employeeAge: number;
  profileImage: string;
}

const filtersSearch: Ref<Filters> = ref({
  employeeId: 0,
  idService: 0,
  employeeName: '',
  employeeSalary: 0,
  employeeAge: 0,
  profileImage: '',
});

export default {
  name: 'employee',
  data() {
    employee: [];
  },

  async EmployeeListar(): Promise<any> {
    try {
      console.log('Listar Employee');
      const url = 'localhost:8080/amaris/Servicio/Employee/listEmployee';
      console.log('url');
      const { data } = await axios.get(url);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },

  async EmployeeInsertar(radicadoJson: any): Promise<any> {
    try {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };

      console.log('Insertar Employee');

      const url = 'localhost:8080/amaris/Servicio/Employee/';
      console.log('url');
      const baseURL = url + 'addEmployee/';
      const data = await axios.post(baseURL, radicadoJson, { headers });
      console.log(data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },

  async EmployeeActualizar(radicadoJson: any): Promise<any> {
    try {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };

      console.log('Actualizar Employee');
      const url = 'localhost:8080/amaris/Servicio/Employee/';
      console.log('url');
      const baseURL = url + 'editEmployee/';

      const { data } = await axios.post(baseURL, radicadoJson, { headers });

      console.log(data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },

  async EmployeeSearchId(radicadoJson: any): Promise<any> {
    try {
      console.log('visto desde el servico' + radicadoJson);
      const headers = {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'Content-Type': 'application/json',
      };

      console.log('Buscar  Dependencia Por Id');
      const url = 'localhost:8080/amaris/Servicio/Employee/';
      console.log('url');
      const baseURL = url + 'listEmployeeById/';

      const { data } = await axios.post(baseURL, radicadoJson, { headers });

      console.log(data);
      return data;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log('Error del error');
    }
  },
};
