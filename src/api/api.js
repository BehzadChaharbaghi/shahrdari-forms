import Axios from "axios";

export const getAxiosInstanceApi = () => {
    const token = localStorage.getItem("token");
    return Axios.create({
        baseURL: "http://localhost:19749/api/",
        headers: {
            "Content-type": "application/json;",
            Authorization: "Bearer " + token,
        },
    });
};