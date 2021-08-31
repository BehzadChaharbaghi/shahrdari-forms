import { useAuthDispatch } from "../context/AuthContext";
import { getAxiosInstanceApi } from "./api";

export const authApi = (user, url, callback) => {
  const userInfo = useAuthDispatch();
  console.log(JSON.stringify(user));

  getAxiosInstanceApi()
    .post(`auth/${url}`, JSON.stringify(user))
    .then((response) => {
      const data = response.data;
      console.log(data);
      callback(true, data);
      // console.log(error);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};
