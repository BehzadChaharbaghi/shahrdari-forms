import Axios from "axios";

const { REACT_APP_BASEURL } = process.env;

export const getAxiosInstanceApi = () => {
    const token = localStorage.getItem("token");
    return Axios.create({
        baseURL: `${REACT_APP_BASEURL}`,
        headers: {
            "Content-type": "application/json;",
            Authorization: "Bearer " + token,
        },
    });
};