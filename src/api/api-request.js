import { instanceAxios } from "./base-api";

// api req type
export const GetRequestType = (url, callback) => {
  instanceAxios().get(`RequestType/${url}`)
    .then(response => {
      const data = response.data;
      callback(true, data);
    })
    .catch(error => {
      console.log(error);
      callback(false, error);
    })
}

// api req Buyer
export const RequestBuyerApi = (req, url, callback) => {
  console.log(JSON.stringify(req));
  instanceAxios()
    .post(`RequestBuyer/${url}`, JSON.stringify(req))
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

// api req Letter
export const RequestLetterApi = (req, url, callback) => {
  console.log(JSON.stringify(req));
  instanceAxios()
    .post(`RequestLetter/${url}`, JSON.stringify(req))
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
