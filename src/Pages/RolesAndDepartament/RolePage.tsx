import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import { useLoading } from "../../Components/Loading";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import Select from "../../Components/Select";
import DataTable, { TableData, TableRow } from "../../Components/Table";
import { DepartmentModel } from "../../Model/DepartmentModel";
import { RoleModel } from "../../Model/RoleModel";
import { findAllDepartmentsByFilter } from "../../Service/DepartmentService";
import { findAllRolesByFilter } from "../../Service/RoleService";
import Toast from "../../Components/Toast";
import InputSwitch from "../../Components/InputSwitch";


export default function RolePage() {
    const { setLoading } = useLoading();
    const toast = useRef<any>(null);
    const navigate = useNavigate();

    const [departamentOptions, setDepartamentOptions] = useState<DepartmentModel[]>([]);

    const [roleName, setRoleName] = useState<string>("");
    const [department, setDepartment] = useState<DepartmentModel | undefined>();
    const [onlyActive, setOnlyActive] = useState<boolean>(true);

    const [roles, setRoles] = useState<RoleModel[]>([]);

    useEffect(() => {
        setLoading(true);
        findAllDepartmentsByFilter("")
            .then(response => {
                setDepartamentOptions(response.data);
                setLoading(false);
            }).catch((error) => {
                toast.current.showError('Error', `Erro ao buscar departamentos: ${error.status} - ${error}`, 'error');
                setLoading(false);
            });
    }, [setLoading]);

    const onFilter = (e: any) => {
        e.preventDefault();
        setLoading(true);
        findAllRolesByFilter(roleName, department?.id || 0, onlyActive)
            .then(response => {
                setRoles(response.data);
                setLoading(false);
            }).catch((error) => {
                toast.current.showError('Error', `Erro ao buscar cargos: ${error.status} - ${error}`, 'error');
                setLoading(false);
            })
    }

    const onResetFilter = () => {
        setRoleName("")
        setDepartment(undefined)
    }

    const dataTemplate = () => {
        return (roles.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableData data-label="Cargo" active={item.active}>{item.name}</TableData>
                    <TableData data-label="Departamento">{item.department.name}</TableData>
                    <TableData data-label="Ações">
                        <FaEdit onClick={() => navigate(`/roles-and-departments/role/${item.id}`)}></FaEdit>
                    </TableData>
                </TableRow>
            )
        }))
    }

    return (
        <>
            <Toast ref={toast}></Toast>
            <FormButtons align="end">
                <Button label="Adicionar cargo" onClick={() => navigate("/roles-and-departments/role/0")}></Button>
            </FormButtons>

            <Panel title="Cadastro de cargos">
                <form onSubmit={(e) => onFilter(e)}>
                    <ResponsiveGrid columns={2}>
                        <FormItem>
                            <label>Cargo</label>
                            <Input type="text" value={roleName} onChange={(value) => setRoleName(value)}></Input>
                        </FormItem>
                        <FormItem>
                            <label>Departamento</label>
                            <Select value={department} options={departamentOptions} optionLabel="name" onChange={(obj) => setDepartment(obj)}></Select>
                        </FormItem>
                        <FormItem>
                            <label>Somente ativos?</label>
                            <InputSwitch value={onlyActive} onChange={(value) => setOnlyActive(value)}></InputSwitch>
                        </FormItem>
                    </ResponsiveGrid>
                    <FormButtons>
                        <Button type="submit" label="Filtrar"></Button>
                        <Button type="reset" label="Limpar" onClick={() => onResetFilter()} transparent></Button>
                    </FormButtons>
                </form>
            </Panel>
            <Panel title="Resultado">
                <DataTable headers={["Cargo", "Departamento", "Ações"]} data={roles} dataTemaplte={dataTemplate()}></DataTable>
            </Panel>
        </>
    )
}