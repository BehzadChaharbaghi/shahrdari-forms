import { getAxiosInstanceApi } from "./api";

export const AuthApi = (user, url, callback) => {
  // const userInfo = useAuthDispatch();
  console.log(JSON.stringify(user));

  getAxiosInstanceApi()
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
