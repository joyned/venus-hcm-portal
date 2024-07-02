import axios from "axios";
import { RoleModel } from "../Model/RoleModel";

const findAllRolesByFilter = (name: string, departamentId: number) => {
    return axios.get<RoleModel[]>(`${process.env.REACT_APP_API_URL}/role/filter?name=${name}&departmentId=${departamentId}`);
}

const findRoleById = (id: number) => {
    return axios.get<RoleModel>(`${process.env.REACT_APP_API_URL}/role/${id}`);
}

const saveRole = (role: RoleModel) => {
    return axios.post<RoleModel>(`${process.env.REACT_APP_API_URL}/role`, role);
}

export { findAllRolesByFilter, findRoleById, saveRole }