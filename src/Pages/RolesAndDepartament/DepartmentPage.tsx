import { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import { useLoading } from "../../Components/Loading";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import DataTable, { TableData, TableRow } from "../../Components/Table";
import { DepartmentModel } from "../../Model/DepartmentModel";
import { findAllDepartmentsByFilter } from "../../Service/DepartmentService";
import Toast from "../../Components/Toast";
import { useTranslation } from "react-i18next";

export default function DepartmentPage() {
    const { t } = useTranslation();
    const toast = useRef<any>(null);
    const { setLoading } = useLoading();
    const navigate = useNavigate();
    const [filterName, setFilterName] = useState("");
    const [departments, setDepartments] = useState<DepartmentModel[]>([]);

    const onFilter = (e: any) => {
        e.preventDefault();
        setDepartments([]);
        setLoading(true);
        findAllDepartmentsByFilter(filterName)
            .then((response) => {
                setDepartments(response.data);
                setLoading(false)
            }).catch((error) => {
                toast.current.showError('Error', `Erro ao buscar departamentos: ${error.status} - ${error}`, 'error');
                setLoading(false);
            });;
    }

    const dataTemplate = () => {
        return (
            departments.map((item, index) => {
                return (
                    <TableRow key={index}>
                        <TableData data-label={t('department')}>{item.name}</TableData>
                        <TableData data-label={t('actions')}>
                            <FaRegEdit onClick={() => navigate(`/roles-and-departments/department/${item.id}`)}></FaRegEdit>
                        </TableData>
                    </TableRow>
                )
            }))
    }

    return (
        <>
            <Toast ref={toast}></Toast>
            <FormButtons align="end">
                <Button label={t('addDepartment')} onClick={() => navigate("/roles-and-departments/department/0")}></Button>
            </FormButtons>

            <Panel title={t('departmentRegister')}>
                <form onSubmit={(e) => onFilter(e)}>
                    <ResponsiveGrid columns={1}>
                        <FormItem>
                            <label>{t('department')}</label>
                            <Input type="text" value={filterName} onChange={(value) => setFilterName(value)}></Input>
                        </FormItem>
                    </ResponsiveGrid>
                    <FormButtons>
                        <Button type="submit" label={t('filter')}></Button>
                        <Button type="reset" label={t('clean')} transparent></Button>
                    </FormButtons>
                </form> 
            </Panel>
            <Panel title={t('result')}>
                <DataTable headers={[t('department'), t('actions')]} data={departments} dataTemaplte={dataTemplate()}></DataTable>
            </Panel>
        </>
    )
}