import axios from "axios";

export async function postLogin(payload: loginType) {
  const res = await axios.post("/api/users/login", payload);
  return res;
}

export async function postRegister(payload: loginType) {
  const res = await axios.post("/api/users/register", payload);
  return res;
}

export async function getAuth() {
  const res = await axios.get("/api/users/auth");
  return res.data;
}

export const userClient = {
  login: (payload: loginType) => postLogin(payload),
  register: (payload: loginType) => postRegister(payload),
  auth: () => getAuth(),
};
