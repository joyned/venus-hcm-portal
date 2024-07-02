import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import TextArea from "../../Components/TextArea";
import { DepartmentModel } from "../../Model/DepartmentModel";
import { findDepartmentById, saveDepartment } from "../../Service/RolesAndDepartmentService";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { useLoading } from "../../Components/Loading";

export default function DepartmentFormPage() {
    const { setLoading } = useLoading();
    const params = useParams()
    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (params.id && params.id !== '0') {
            setLoading(true)
            findDepartmentById(Number(params.id))
                .then((response: AxiosResponse<DepartmentModel>) => {
                    setId(Number(response.data.id));
                    setName(response.data.name);
                    setDescription(response.data.description);
                    setLoading(false);
                })
        }
    }, [params.id, setLoading]);

    const onSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);

        const department: DepartmentModel = {
            id: id === 0 ? undefined : id,
            name: name,
            description: description
        }

        saveDepartment(department)
            .then((response: AxiosResponse<DepartmentModel>) => {
                setId(Number(response.data.id));
                setLoading(false);
                navigate(`/roles-and-departments/department/${response.data.id}`)
            })
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Voltar" transparent type="button" onClick={() => navigate(`/roles-and-departments/department`)}></Button>
            </FormButtons>
            <Panel title={name ? name : 'Novo departamento'}>
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <label>Nome</label>
                        <Input type="text" value={name} onChange={(value) => setName(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <label>Descrição</label>
                        <TextArea value={description} onChange={(value) => setDescription(value)}></TextArea>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
        </form>
    )
}