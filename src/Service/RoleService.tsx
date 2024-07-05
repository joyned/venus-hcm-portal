import axios from "axios";
import { RoleModel } from "../Model/RoleModel";

const findAllRolesByFilter = (name: string, departamentId: number, onlyActives?: boolean) => {
    if(onlyActives === undefined) onlyActives = true;
    return axios.get<RoleModel[]>(`${process.env.REACT_APP_API_URL}/role/filter?name=${name}&departmentId=${departamentId}&onlyActive=${onlyActives}`);
}

const findRoleById = (id: number) => {
    return axios.get<RoleModel>(`${process.env.REACT_APP_API_URL}/role/${id}`);
}

const saveRole = (role: RoleModel) => {
    return axios.post<RoleModel>(`${process.env.REACT_APP_API_URL}/role`, role);
}

export { findAllRolesByFilter, findRoleById, saveRole }