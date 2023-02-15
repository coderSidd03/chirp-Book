import axios from 'axios'


const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
      }`;
  }

  return req;
});


export const uploadImage = (data) => API.post('social-media/v1/upload', data)
export const uploadPost = (data) => API.post('social-media/v1/posts', data)