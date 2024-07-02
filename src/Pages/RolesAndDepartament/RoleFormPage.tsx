import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";

export default function RoleFormPage() {
    return (
        <form>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Cancelar" transparent type="button"></Button>
            </FormButtons>
            <Panel title="Informações">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <label>Nome</label>
                        <Input type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <label>Deparamento</label>
                        <Select />
                    </FormItem>
                    <FormItem>
                        <label>Descrição</label>
                        <TextArea></TextArea>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
        </form>
    )
}