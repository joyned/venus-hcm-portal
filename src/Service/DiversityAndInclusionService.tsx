import axios from "axios"
import GenderModel from "../Model/GenderModel";

const findAllGenders = () => {
    return axios.get<GenderModel[]>(`${process.env.REACT_APP_API_URL}/gender`);
}

export { findAllGenders }