import axios from "axios";
import { CityBaseModel } from "../Model/CityBaseModel";

const findAllCities = () => {
    return axios.get<CityBaseModel[]>(`${process.env.REACT_APP_API_URL}/city-base`);
}

export { findAllCities }