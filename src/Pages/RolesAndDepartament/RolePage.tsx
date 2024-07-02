import { IoDocumentsOutline } from "react-icons/io5";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow } from "../../Components/Table";
import { useNavigate } from "react-router-dom";

const tempData = [
    {
        id: 1,
        name: "Desenvolvedor",
        department: "TI"
    },
    {
        id: 2,
        name: "Gerente",
        department: "TI"
    },
    {
        id: 3,
        name: "Estagiário",
        department: "TI"
    }
]

export default function RolePage() {
    const navigate = useNavigate();
    return (
        <>
            <Panel title="Cadastro de cargos">
                <form>
                    <ResponsiveGrid columns={2}>
                        <FormItem>
                            <label>Cargo</label>
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem>
                            <label>Departamento</label>
                            <Input type="text"></Input>
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
                            <TableHeaderValue>Cargo</TableHeaderValue>
                            <TableHeaderValue>Departamento</TableHeaderValue>
                            <TableHeaderValue>Ações</TableHeaderValue>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tempData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.name}</TableData>
                                    <TableData>{item.department}</TableData>
                                    <TableData>
                                        <IoDocumentsOutline></IoDocumentsOutline>
                                    </TableData>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Button label="Adicionar cargo" onClick={() => navigate("/job-and-departments/job/0")}></Button>
            </Panel>
        </>
    )
}