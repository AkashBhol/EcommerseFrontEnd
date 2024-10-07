import axios from "axios"

export const getAllUser = async (page, pageSize) => {
    const responce = await axios.get("http://localhost:8090/api/user/get/all?page=" + page + "&pageSize=" + pageSize, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "application/json",
        }
    })
    return responce.data;
}

export const updatePassword = async (payload) => {
    const responce = await axios.put("http://localhost:8090/api/user/updatePasswoed", payload, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "application/json",
        }
    })
    return responce;
}

export const createUser = async (payload) => {
    const responce = await axios.post("", payload);
    return responce;
}