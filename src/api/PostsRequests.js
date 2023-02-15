import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getTimelinePosts = (id) => API.get(`social-media/v1/posts/${id}/timeline`)
export const likePosts = (id, userId) => API.put(`social-media/v1/posts/${id}/like`, { userId: userId })