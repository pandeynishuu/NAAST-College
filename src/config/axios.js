import axios from "axios";
export const axiosApi = axios.create({
    baseURL: 'https://holygardenacademy.com/api/',  
    headers:{'Accept': 'application/json','Content-Type':'application/json'}
   
})