import axios from "axios";
import { DepartmentModel } from "../Model/DepartmentModel";

const findAllDepartmentsByFilter = (name: string) => {
    return axios.get<DepartmentModel[]>(`${process.env.REACT_APP_API_URL}/department/filter?name=${name}`);
}

const findDepartmentById = (id: number) => {
    return axios.get<DepartmentModel>(`${process.env.REACT_APP_API_URL}/department/${id}`);
}

const saveDepartment = (department: DepartmentModel) => {
    return axios.post<DepartmentModel>(`${process.env.REACT_APP_API_URL}/department`, department);
}


export { findAllDepartmentsByFilter, saveDepartment, findDepartmentById }