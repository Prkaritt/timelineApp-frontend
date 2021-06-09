import axios from "axios";

// const url = "http://localhost:5000/user";
const url = "https://prakritprogress.herokuapp.com/user";

export const signUp = (formData) => axios.post(`${url}/signUp`, formData);

export const signIn = (formData) => axios.post(`${url}/signIn`, formData);
