import axios from "axios";


export const saveCategory = async (payload) => {
    const responce = await axios.post("http://localhost:8090/api/category/create", payload, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "application/json",
        }
    });
    return responce;
}

export const getAllCategory = async (page, pageSize) => {
    const responce = await axios.get("http://localhost:8090/api/category/get?page=" + page + "&pageSize=" + pageSize, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "application/json",
        }
    });
    return responce;
}

export const getsAllCategory = async () => {
    const responce = await axios.get("http://localhost:8090/api/categoory/get/all", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "application/json",
        }
    });
    return responce;
}