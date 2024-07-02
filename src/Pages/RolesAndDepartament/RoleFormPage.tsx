import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import { useLoading } from "../../Components/Loading";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";
import { DepartmentModel } from "../../Model/DepartmentModel";
import { findAllDepartmentsByFilter, findRoleById, saveRole } from "../../Service/RolesAndDepartmentService";
import { RoleModel } from "../../Model/RoleModel";
import { useNavigate, useParams } from "react-router-dom";

export default function RoleFormPage() {
    const params = useParams();
    const navigate = useNavigate();
    const { setLoading } = useLoading();

    const [departamentOptions, setDepartamentOptions] = useState<DepartmentModel[]>([]);

    const [roleName, setRoleName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [department, setDepartment] = useState<DepartmentModel>();

    useEffect(() => {
        const id = Number(params.id);

        setLoading(true);
        findAllDepartmentsByFilter("").then(response => {
            setDepartamentOptions(response.data);
            if (id && id !== 0) {
                findRoleById(id).then(response => {
                    setRoleName(response.data.name);
                    setDescription(response.data.description);
                    setDepartment(response.data.department);
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        });
    }, [params.id, setLoading]);

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (department && roleName && description) {
            setLoading(true)
            const role: RoleModel = {
                name: roleName,
                description: description,
                department: department
            }

            saveRole(role).then(response => {
                navigate(`/roles-and-departments/role/${response.data.id}`);
                setLoading(false);
            });
        }

    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Voltar" transparent type="button" onClick={() => navigate("/roles-and-departments/role")}></Button>
            </FormButtons>
            <Panel title={roleName ? roleName : 'Novo cargo'}>
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <label>Nome</label>
                        <Input type="text" value={roleName} onChange={(value) => setRoleName(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <label>Deparamento</label>
                        <Select value={department} options={departamentOptions} optionLabel="name" onChange={(obj) => setDepartment(obj)}></Select>
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