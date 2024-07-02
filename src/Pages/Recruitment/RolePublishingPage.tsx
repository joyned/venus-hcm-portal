import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import { Table, TableBody, TableData, TableHeader, TableHeaderValue, TableRow } from "../../Components/Table";

const tempData = [
    {
        roleName: "Desenvolvedor",
        department: "TI",
        description: "Desenvolvedor de software",
        closingDate: "01/01/2022"
    },
]

export default function RolePublishingPage() {
    const navigate = useNavigate();
    return (
        <div>
            <Panel title="Publicação de vagas">
                <form>
                    <ResponsiveGrid columns={2}>
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
                            <TableHeaderValue>Data de fechamento</TableHeaderValue>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tempData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.roleName}</TableData>
                                    <TableData>{item.department}</TableData>
                                    <TableData>{item.closingDate}</TableData>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Button label="Adicionar vaga" onClick={() => navigate("/recruitment/publishing/0")}></Button>
            </Panel>
        </div>
    )
}