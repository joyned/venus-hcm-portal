import axios from "axios";
import { DepartmentModel } from "../Model/DepartmentModel";
import { RoleModel } from "../Model/RoleModel";

const findAllDepartmentsByFilter = (name: string) => {
    return axios.get<DepartmentModel[]>(`${process.env.REACT_APP_API_URL}/department/filter?name=${name}`);
}

const findDepartmentById = (id: number) => {
    return axios.get<DepartmentModel>(`${process.env.REACT_APP_API_URL}/department/${id}`);
}

const saveDepartment = (department: DepartmentModel) => {
    return axios.post<DepartmentModel>(`${process.env.REACT_APP_API_URL}/department`, department);
}

const findAllRolesByFilter = (name: string, departamentId: number) => {
    return axios.get<RoleModel[]>(`${process.env.REACT_APP_API_URL}/role/filter?name=${name}&departmentId=${departamentId}`);
}

const findRoleById = (id: number) => {
    return axios.get<RoleModel>(`${process.env.REACT_APP_API_URL}/role/${id}`);
}

const saveRole = (role: RoleModel) => {
    return axios.post<RoleModel>(`${process.env.REACT_APP_API_URL}/role`, role);
}

export { findAllDepartmentsByFilter, saveDepartment, findDepartmentById, findAllRolesByFilter, findRoleById, saveRole }