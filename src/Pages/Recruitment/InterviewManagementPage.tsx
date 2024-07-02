import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow } from "../../Components/Table";

const tempData = [
    {
        name: "João da Silva",
        role: "Desenvolvedor",
        date: "01/01/2020",
    },
    {
        name: "Maria da Silva",
        role: "Desenvolvedor",
        date: "01/01/2020",
    },
    {
        name: "José da Silva",
        role: "Desenvolvedor",
        date: "01/01/2020",
    },
]

export default function InterviewManagementPage() {
    return (
        <>
            <Panel title="Gestão de entrevistas">
                <form>
                    <ResponsiveGrid columns={2}>
                        <FormItem>
                            <label>De</label>
                            <Input type="date"></Input>
                        </FormItem>
                        <FormItem>
                            <label>Até</label>
                            <Input type="date"></Input>
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
                            <TableHeaderValue>Cargo</TableHeaderValue>
                            <TableHeaderValue>Data</TableHeaderValue>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tempData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.name}</TableData>
                                    <TableData>{item.role}</TableData>
                                    <TableData>{item.date}</TableData>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Panel>
        </>
    )
}