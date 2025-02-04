import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import InputSwitch from "../../Components/InputSwitch";
import { useLoading } from "../../Components/Loading";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";
import { DepartmentModel } from "../../Model/DepartmentModel";
import { RoleModel } from "../../Model/RoleModel";
import { findAllDepartmentsByFilter } from "../../Service/DepartmentService";
import { findRoleById, saveRole } from "../../Service/RoleService";
import Toast from "../../Components/Toast";
import Label from "../../Components/Label";
import { isNotBlankOrEmpty } from "../../Utils/GeneralUtils";
import { useTranslation } from "react-i18next";

export default function RoleFormPage() {
    const { t } = useTranslation();
    const toast = useRef<any>(null);
    const params = useParams();
    const navigate = useNavigate();
    const { setLoading } = useLoading();

    const [departamentOptions, setDepartamentOptions] = useState<DepartmentModel[]>([]);

    const [roleId, setRoleId] = useState<number | undefined>(undefined);
    const [roleName, setRoleName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [department, setDepartment] = useState<DepartmentModel>();
    const [active, setActive] = useState<boolean>(true);
    const [createdAt, setCreatedAt] = useState<Date | undefined>(undefined);

    useEffect(() => {
        setRoleId(Number(params.id));

        setLoading(true);
        findAllDepartmentsByFilter("").then(response => {
            setDepartamentOptions(response.data);
            if (roleId && roleId > 0) {
                findRoleById(roleId).then(response => {
                    setRoleName(response.data.name);
                    setDescription(response.data.description);
                    setDepartment(response.data.department);
                    setActive(response.data.active);
                    setCreatedAt(response.data.createdAt);
                    setLoading(false);
                }).catch((error) => {
                    toast.current.showError('Error', `Erro ao buscar cargo: ${error.status} - ${error}`, 'error');
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        }).catch((error) => {
            toast.current.showError('Error', `Erro ao buscar departamentos: ${error.status} - ${error}`, 'error');
            setLoading(false);
        });
    }, [params.id, roleId, setLoading]);

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (department && isNotBlankOrEmpty(roleName)) {
            setLoading(true)
            const role: RoleModel = {
                id: roleId,
                name: roleName,
                description: description,
                department: department,
                createdAt: createdAt,
                active: active
            }

            saveRole(role).then(() => {
                setLoading(false);
                navigate(`/roles-and-departments/role`);
            }).catch((error) => {
                toast.current.showError('Error', `Erro ao salvar cargo: ${error.status} - ${error}`, 'error');
                setLoading(false);
            });
        } else {
            toast.current.showError('Error', 'Preencha todos os campos obrigatórios!', 'error');
        }

    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <Toast ref={toast}></Toast>
            <FormButtons align="end">
                <Button label={t('save')} type="submit"></Button>
                <Button label={t('back')} transparent type="button" onClick={() => navigate("/roles-and-departments/role")}></Button>
            </FormButtons>
            <Panel title={roleName ? roleName : t('newRole')}>
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <Label required>{t('name')}:</Label>
                        <Input type="text" value={roleName} onChange={(value) => setRoleName(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <Label required>{t('department')}:</Label>
                        <Select value={department} options={departamentOptions} optionLabel="name" onChange={(obj) => setDepartment(obj)}></Select>
                    </FormItem>
                    <FormItem>
                        <label>{t('description')}:</label>
                        <TextArea value={description} onChange={(value) => setDescription(value)}></TextArea>
                    </FormItem>
                    <FormItem>
                        <label>{t('active')}</label>
                        <InputSwitch value={active} onChange={() => setActive(!active)}></InputSwitch>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
        </form>
    )
}