import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow } from "../../Components/Table";
import { DepartmentModel } from "../../Model/DepartmentModel";
import { findAllDepartmentsByFilter } from "../../Service/RolesAndDepartmentService";
import { useLoading } from "../../Components/Loading";

export default function DepartmentPage() {
    const { setLoading } = useLoading();
    const navigate = useNavigate();
    const [filterName, setFilterName] = useState("");
    const [departments, setDepartments] = useState<DepartmentModel[]>([]);

    const onFilter = (e: any) => {
        e.preventDefault();
        setLoading(true);
        findAllDepartmentsByFilter(filterName)
            .then((response) => {
                setDepartments(response.data);
                setLoading(false)
            });
    }

    return (
        <>
            <Panel title="Cadastro de departamentos">
                <form onSubmit={(e) => onFilter(e)}>
                    <ResponsiveGrid columns={1}>
                        <FormItem>
                            <label>Departamento</label>
                            <Input type="text" value={filterName} onChange={(value) => setFilterName(value)}></Input>
                        </FormItem>
                    </ResponsiveGrid>
                    <FormButtons>
                        <Button type="submit" label="Filtrar"></Button>
                        <Button type="reset" label="Limpar" transparent></Button>
                    </FormButtons>
                </form>
            </Panel>
            <Panel title="Resultado">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderValue>Departamento</TableHeaderValue>
                            <TableHeaderValue>Ações</TableHeaderValue>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {departments.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.name}</TableData>
                                    <TableData>
                                        <FaRegEdit onClick={() => navigate(`/job-and-departments/department/${item.id}`)}></FaRegEdit>
                                    </TableData>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Button label="Adicionar departamento" onClick={() => navigate("/job-and-departments/department/0")}></Button>
            </Panel>
        </>
    )
}