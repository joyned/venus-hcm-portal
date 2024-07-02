import { IoDocumentsOutline } from "react-icons/io5";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow } from "../../Components/Table";

const tempData = [
    {
        candidateName: "João da Silva",
        roleName: "Desenvolvedor",
        department: "TI",
        approved: false
    },
    {
        candidateName: "Maria da Silva",
        roleName: "Desenvolvedor",
        department: "TI",
        approved: true
    },
    {
        candidateName: "José da Silva",
        roleName: "Desenvolvedor",
        department: "TI",
        approved: undefined
    }
]

export default function ResumeScreeningPage() {
    return (
        <>
            <Panel title="Triagem de curriculos">
                <form>
                    <ResponsiveGrid columns={1}>
                        <FormItem>
                            <label>Nome do candidato</label>
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem>
                            <label>Nome da vaga</label>
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
                            <TableHeaderValue>Nome</TableHeaderValue>
                            <TableHeaderValue>Departamento</TableHeaderValue>
                            <TableHeaderValue>Cargo</TableHeaderValue>
                            <TableHeaderValue>Aprovado</TableHeaderValue>
                            <TableHeaderValue>Ações</TableHeaderValue>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tempData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.candidateName}</TableData>
                                    <TableData>{item.department}</TableData>
                                    <TableData>{item.roleName}</TableData>
                                    <TableData>
                                        {item.approved === true ? "Sim" : item.approved === false ? "Não" : "Pendente"}
                                    </TableData>
                                    <TableData>
                                        <IoDocumentsOutline></IoDocumentsOutline>
                                    </TableData>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Panel>
        </>
    )
}