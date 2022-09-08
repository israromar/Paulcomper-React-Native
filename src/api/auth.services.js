import axios from "axios";
const API_URL = "https://6319c0e18e51a64d2beb80b9.mockapi.io/api/v1/";

export const register = async (payload) => {
  const { name, surname, email, password } = payload;

  return axios.post(API_URL + "signup", {
    name,
    surname,
    email,
    password,
  });
};
