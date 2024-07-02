import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";

export default function RolePublishingFormPage() {
    return (
        <form>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Cancelar" transparent type="button"></Button>
            </FormButtons>

            <Panel title="Informações da vaga">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <label>Nome</label>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <label>Departamento</label>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <label>Data de fechamento</label>
                        <Input type="date"></Input>
                    </FormItem>
                    <FormItem>
                        <label>Responsável</label>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <label>Lider direto</label>
                        <Input type="text"></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>

            <Panel title="Descrição">
                <FormItem>
                    <Input type="textarea"></Input>
                </FormItem>
            </Panel>
        </form>
    )
}