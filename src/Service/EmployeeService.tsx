import axios from "axios";
import { EmployeeModel } from "../Model/EmployeeModel";

const findEmployeeById = (id: number) => {
    return axios.get<EmployeeModel>(`${process.env.REACT_APP_API_URL}/employee/${id}`);
}

const findEmployeeByFilter = (name?: string, roleId?: number, departmentId?: number, cityId?: number) => {
    return axios.get<EmployeeModel[]>(`${process.env.REACT_APP_API_URL}/employee?name=${name}&roleId=${roleId}&departmentId=${departmentId}&cityId=${cityId}`);
}

const saveEmployee = (employee: EmployeeModel) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/employee`, employee);
}

export { findEmployeeByFilter, saveEmployee, findEmployeeById }