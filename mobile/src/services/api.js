import axios from 'axios';

const api = axios.create({
  baseURL: '<INSIRA O SEU IP AQUI (NÃO SE ESQUEÇA DE INICIAR COM http://)>:3333',
});

export default api;
