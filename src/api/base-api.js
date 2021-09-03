import Axios from "axios";

export const instanceAxios = () => {
    const baseUrl = "http://localhost:19749/api/"
    const token = localStorage.getItem("token");
    
    return Axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-type": "application/json;",
            Authorization: "Bearer " + token,
        },
    });
};