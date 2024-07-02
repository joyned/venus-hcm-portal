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
import { findEmployeeByFilter } from "../../Service/EmployeeService"
import { findAllDepartmentsByFilter, findAllRolesByFilter } from "../../Service/RolesAndDepartmentService"

const EmployeePageContent = styled.div``

export default function EmployeePage() {
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
                        <TableData data-label="Nome">{item.name}</TableData>
                        <TableData data-label="Departamento">{item.role.department.name}</TableData>
                        <TableData data-label="Cargo">{item.role.name}</TableData>
                        <TableData data-label="Admissão">{String(item.admissionDate)}</TableData>
                        <TableData data-label="Ações">
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
                <Button type="button" onClick={() => navigate("/personal-administration/employee/0")} label="Novo Funcionário"></Button>
            </FormButtons>
            <Panel title="Cadastro de funcionários">
                <form onSubmit={(e) => onFilter(e)}>
                    <ResponsiveGrid columns={2}>
                        <FormItem>
                            <label>Nome</label>
                            <Input type="text" value={name} onChange={(value) => setName(value)}></Input>
                        </FormItem>
                        <FormItem>
                            <label>Cidade</label>
                            <Select value={city} options={cityOptions} optionLabel="city" onChange={(value) => setCity(value)}></Select>
                        </FormItem>
                        <FormItem>
                            <label>Departamento</label>
                            <Select value={department} options={departmentOptions} onChange={(value) => onDepartmentSelect(value)}></Select>
                        </FormItem>
                        <FormItem>
                            <label>Cargo</label>
                            <Select value={role} options={roleOptions} onChange={(value) => setRole(value)} disabled={!department}></Select>
                        </FormItem>
                        <FormItem>
                            <label>Data de Admissão</label>
                            <Input type="date" value={admissionDate} onChange={(value) => setAdmissionDate(value)}></Input>
                        </FormItem>
                    </ResponsiveGrid>
                    <FormButtons>
                        <Button type="submit" label="Filtrar"></Button>
                        <Button type="reset" label="Limpar" transparent></Button>
                    </FormButtons>
                </form>
            </Panel>
            <Panel title="Resultado">
                <DataTable headers={["Nome", "Departamento", "Cargo", "Data de Admissão", "Ações"]} dataTemaplte={dataTemplate()}></DataTable>
            </Panel>
        </EmployeePageContent>
    )
}