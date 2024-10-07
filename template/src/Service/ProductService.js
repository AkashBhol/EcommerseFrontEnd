import axios from "axios";

export const getAllProduct = async (page, pageSize) => {
    const response = await axios.get("http://localhost:8090/api/product/get?page=" + page + "&pageSize=" + pageSize, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "application/json",
        }
    });
    return response.data;
};


export const createProduct = async (formData) => {
    debugger
    const responce = await axios.post("http://localhost:8090/api/product/create", formData,  {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
            "Content-Type": "multipart/form-data",
        }
    });
    return responce;
}