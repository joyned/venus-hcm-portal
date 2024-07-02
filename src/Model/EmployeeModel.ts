import { AddressModel } from './AddressModel';
import { CityBaseModel } from './CityBaseModel';
import ContractTypeModel from './ContractTypeModel';
import { EmergencyContactModel } from './EmergencyContactModel';
import { EmployeeBenefitModel } from './EmployeeBenefitModel';
import GenderModel from './GenderModel';
import { RoleModel } from './RoleModel';

export interface EmployeeModel {
  id?: number;
  name: string;
  birthdate: Date;
  gender: GenderModel;
  address: AddressModel;
  email: string;
  telephone: string;
  cpf: string;
  rg: string;
  workCard: string;
  voterRegistration: string;
  license: string;
  passport: string;
  admissionDate: Date;
  role: RoleModel;
  contractType: ContractTypeModel;
  workTime: number;
  cityBase: CityBaseModel;
  employeeBenefit: EmployeeBenefitModel;
  bankNumber: string;
  bankAgency: string;
  bankAccount: string;
  emergencyContact: EmergencyContactModel[];
}
