import axios from "axios";

export const login = (payload) => {
    return axios.post("http://localhost:8090/api/authenticate", payload);
}
