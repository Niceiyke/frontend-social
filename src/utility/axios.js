import axios from 'axios'

const AuthToken = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : null;

const headers = {
  Authorization: `Bearer ${AuthToken?.access}`,
};

export const axiox = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers
});

axiox.interceptors.request.use(async req=>{
  
        const AuthToken = localStorage.getItem("accessToken")
          ? JSON.parse(localStorage.getItem("accessToken"))
          : null;

          
          req.headers.Authorization= `Bearer ${AuthToken?.access}`

    return req;
})