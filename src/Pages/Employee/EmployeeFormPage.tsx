import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";


export default function EmployeeFormPage() {
    return (
        <form>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Cancelar" transparent type="button"></Button>
            </FormButtons>

            <Panel title="Dados Básicos">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Nome Completo: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Data de Nascimento: </span>
                        <Input type="date"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Gênero: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Estado Civil: </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Contato">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Rua/Avenida: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Número: </span>
                        <Input type="number"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Bairro: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Cidade: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>E-mail: </span>
                        <Input type="email"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Telefone: </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Documentação">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>CPF: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>RG - Orgão Emissor: </span>
                        <Input type="number"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Carteira de Trabalho (Número - Série): </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Título de Eleitor: </span>
                        <Input type="email"></Input>
                    </FormItem>
                    <FormItem>
                        <span>CNH (se houver): </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Passaporte (se houver): </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Cargo e Departamento">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Cargo/função: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Departamento/setor: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Data de admissão: </span>
                        <Input type="date"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Matrícula do funcionário: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Supervisor imediato: </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Contratação">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Tipo de contrato: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Regime de trabalho: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Jornada de trabalho: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Local de trabalho: </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Salário e Benefícios">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <span>Salário base: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Adicionais (periculosidade, insalubridade): </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Benefícios (vale-transporte, vale-alimentação, plano de saúde, etc.): </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Informações Bancárias">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <span>Banco: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Agência: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Conta corrente: </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Contato de Emergência">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <span>Nome: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Parentesco: </span>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <span>Telefone: </span>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Documentos e Anexos">
                <h1>Upload</h1>
            </Panel>
            <Panel title="Histórico e Anotações">
                <h1>Table</h1>
            </Panel>
        </form>
    )
}