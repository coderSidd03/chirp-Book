import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getUser = (userId) => API.get(`social-media/v1/user/${userId}`)
export const updateUser = (id, formData) => API.put(`social-media/v1/user/${id}`, formData)
export const getAllUser = () => API.get(`social-media/v1/user`)
export const followUser = (id, data) => API.put(`social-media/v1/user/${id}/follow`, data)
export const unFollowUser = (id, data) => API.put(`social-media/v1/user/${id}/unfollow`, data)
