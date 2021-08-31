import Axios from "axios";

export const getAxiosInstanceApi = () => {
    const token = localStorage.getItem("token");
    return Axios.create({
        baseURL: `${token}`,
        headers: {
            "Content-type": "application/json;",
            Authorization: "Bearer " + token,
        },
    });
};