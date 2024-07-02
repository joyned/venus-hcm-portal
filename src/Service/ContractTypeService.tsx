import axios from "axios";
import ContractTypeModel from "../Model/ContractTypeModel";

const findAllContractTypes = () => {
    return axios.get<ContractTypeModel[]>(`${process.env.REACT_APP_API_URL}/contract-type`);
}

export { findAllContractTypes }