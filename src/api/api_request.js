import { getAxiosInstanceApi } from "./api";

export const authApi = (req, url, callback) => {
  // const userInfo = useAuthDispatch();
  console.log(JSON.stringify(req));

  getAxiosInstanceApi()
    .post(`Account/${url}`, JSON.stringify(req))
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
