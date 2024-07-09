import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../../Components/Button"
import FormButtons from "../../Components/FormButtons"
import FormItem from "../../Components/FormItem"
import Input from "../../Components/Input"
import { useLoading } from "../../Components/Loading"
import Panel from "../../Components/Panel"
import ResponsiveGrid from "../../Components/ResponsiveGrid"
import Select from "../../Components/Select"
import DataTable, { TableData, TableRow } from "../../Components/Table"
import { CityBaseModel } from "../../Model/CityBaseModel"
import { DepartmentModel } from "../../Model/DepartmentModel"
import { EmployeeModel } from "../../Model/EmployeeModel"
import { RoleModel } from "../../Model/RoleModel"
import { findAllCities } from "../../Service/CityBaseService"
import { findAllDepartmentsByFilter } from "../../Service/DepartmentService"
import { findEmployeeByFilter } from "../../Service/EmployeeService"
import { findAllRolesByFilter } from "../../Service/RoleService"
import { useTranslation } from "react-i18next"

const EmployeePageContent = styled.div``

export default function EmployeePage() {
    const { t } = useTranslation();
    const { setLoading } = useLoading();
    const navigate = useNavigate();

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<RoleModel | undefined>(undefined);
    const [department, setDepartment] = useState<DepartmentModel | undefined>(undefined);
    const [city, setCity] = useState<CityBaseModel | undefined>(undefined);
    const [admissionDate, setAdmissionDate] = useState<string>("");

    const [roleOptions, setRoleOptions] = useState<RoleModel[]>([]);
    const [departmentOptions, setDepartmentOptions] = useState<DepartmentModel[]>([]);
    const [cityOptions, setCityOptions] = useState<CityBaseModel[]>([]);

    useEffect(() => {
        setLoading(true);
        findAllDepartmentsByFilter('').then((response) => {
            setDepartmentOptions(response.data);
            findAllCities().then((response) => {
                setCityOptions(response.data);
                setLoading(false);
            });
        });
    }, [setLoading]);

    const onFilter = (e: any) => {
        e.preventDefault();
        setLoading(true);
        findEmployeeByFilter(name, role?.id, department?.id, city?.id).then((response) => {
            setEmployees(response.data);
            setLoading(false);
        });
    }

    const onDepartmentSelect = (value: any) => {
        setDepartment(value);
        setLoading(true);
        findAllRolesByFilter('', value.id).then((response) => {
            setRoleOptions(response.data);
            setLoading(false);
        });
    }

    const dataTemplate = () => {
        return (
            employees.map((item, index) => {
                return (
                    <TableRow key={index}>
                        <TableData data-label={t('name')}>{item.name}</TableData>
                        <TableData data-label={t('department')}>{item.role.department.name}</TableData>
                        <TableData data-label={t('role')}>{item.role.name}</TableData>
                        <TableData data-label={t('admissionDate')}>{String(item.admissionDate)}</TableData>
                        <TableData data-label={t('actions')}>
                            <FaEdit onClick={() => navigate(`/personal-administration/employee/${item.id}`)}></FaEdit>
                        </TableData>
                    </TableRow>
                )
            })
        )
    }

    return (
        <EmployeePageContent>
            <FormButtons align="end">
                <Button type="button" onClick={() => navigate("/personal-administration/employee/0")} label={t('addEmployee')}></Button>
            </FormButtons>
            <Panel title={t('employeeRegister')}>
                <form onSubmit={(e) => onFilter(e)}>
                    <ResponsiveGrid columns={2}>
                        <FormItem>
                            <label>{t('name')}</label>
                            <Input type="text" value={name} onChange={(value) => setName(value)}></Input>
                        </FormItem>
                        <FormItem>
                            <label>{t('city')}</label>
                            <Select value={city} options={cityOptions} optionLabel="city" onChange={(value) => setCity(value)}></Select>
                        </FormItem>
                        <FormItem>
                            <label>{t('department')}</label>
                            <Select value={department} options={departmentOptions} onChange={(value) => onDepartmentSelect(value)}></Select>
                        </FormItem>
                        <FormItem>
                            <label>{t('role')}</label>
                            <Select value={role} options={roleOptions} onChange={(value) => setRole(value)} disabled={!department}></Select>
                        </FormItem>
                        <FormItem>
                            <label>{t('admissionDate')}</label>
                            <Input type="date" value={admissionDate} onChange={(value) => setAdmissionDate(value)}></Input>
                        </FormItem>
                    </ResponsiveGrid>
                    <FormButtons>
                        <Button type="submit" label={t('filter')}></Button>
                        <Button type="reset" label={t('clean')} transparent></Button>
                    </FormButtons>
                </form>
            </Panel>
            <Panel title="Resultado">
                <DataTable headers={[t('name'), t('department'), t('role'), t('admissionDate'), t('actions')]} dataTemaplte={dataTemplate()}></DataTable>
            </Panel>
        </EmployeePageContent>
    )
}