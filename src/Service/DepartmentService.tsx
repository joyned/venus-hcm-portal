import axios from "axios";
import { DepartmentModel } from "../Model/DepartmentModel";
import { GET } from "./HttpService";

const findAllDepartmentsByFilter = (name: string) => {
    return GET(`/department/filter?name=${name}`);
}

const findDepartmentById = (id: number) => {
    return axios.get<DepartmentModel>(`${process.env.REACT_APP_API_URL}/department/${id}`);
}

const saveDepartment = (department: DepartmentModel) => {
    return axios.post<DepartmentModel>(`${process.env.REACT_APP_API_URL}/department`, department);
}


export { findAllDepartmentsByFilter, findDepartmentById, saveDepartment };
