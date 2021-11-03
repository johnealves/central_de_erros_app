import axios from "axios";

const axiosApi = axios.create({
  baseURL: `http://192.168.0.103:8080`
})

export default axiosApi;