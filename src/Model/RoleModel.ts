import { DepartmentModel } from './DepartmentModel';

export interface RoleModel {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  department: DepartmentModel;
}
