import axios from "axios";
import { API_KEY } from "@env";

async function authenticate(mode, email, password) {
  // modes: loggin(signInWithPassword) sign up(signUp)
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(endpoint, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  // console.log(response);
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
