import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

