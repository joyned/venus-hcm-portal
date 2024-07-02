import styled from "styled-components"
import Button from "../../Components/Button"
import FormButtons from "../../Components/FormButtons"
import FormItem from "../../Components/FormItem"
import Input from "../../Components/Input"
import Panel from "../../Components/Panel"
import ResponsiveGrid from "../../Components/ResponsiveGrid"
import { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow } from "../../Components/Table"

const EmployeePageContent = styled.div``

const tempData = [
    {
        name: "João da Silva",
        department: "TI",
        role: "Desenvolvedor",
        admissionDate: "01/01/2020"
    },
    {
        name: "Maria da Silva",
        department: "TI",
        role: "Desenvolvedor",
        admissionDate: "01/01/2020"
    },
    {
        name: "José da Silva",
        department: "TI",
        role: "Desenvolvedor",
        admissionDate: "01/01/2020"
    }
]

export default function EmployeePage() {
    return (
        <EmployeePageContent>
            <Panel title="Filtros">
                <form>
                    <ResponsiveGrid columns={2}>
                        <FormItem>
                            <label>Nome</label>
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem>
                            <label>Departamento</label>
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem>
                            <label>Cargo</label>
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem>
                            <label>Data de Admissão</label>
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
                            <TableHeaderValue>Data de Admissão</TableHeaderValue>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tempData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.name}</TableData>
                                    <TableData>{item.department}</TableData>
                                    <TableData>{item.role}</TableData>
                                    <TableData>{item.admissionDate}</TableData>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Panel>
        </EmployeePageContent>
    )
}