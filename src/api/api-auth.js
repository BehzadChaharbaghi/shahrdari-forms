import { instanceAxios } from "./base-api";

export const AuthApi = async (user, url, callback) => {
  console.log(JSON.stringify(user));
  await instanceAxios()
    .post(`Account/${url}`, JSON.stringify(user))
    .then((response) => {
      const data = response.data;
      console.log(data);
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};
