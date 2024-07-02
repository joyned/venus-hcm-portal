import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import GoToTop from "../../Components/GoToTop";
import Input from "../../Components/Input";
import { useLoading } from "../../Components/Loading";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import Select from "../../Components/Select";
import { CityBaseModel } from "../../Model/CityBaseModel";
import ContractTypeModel from "../../Model/ContractTypeModel";
import { EmployeeModel } from "../../Model/EmployeeModel";
import GenderModel from "../../Model/GenderModel";
import { RoleModel } from "../../Model/RoleModel";
import { findAllCities } from "../../Service/CityBaseService";
import { findAllContractTypes } from "../../Service/ContractTypeService";
import { findAllGenders } from "../../Service/DiversityAndInclusionService";
import { findEmployeeById, saveEmployee } from "../../Service/EmployeeService";
import { findAllRolesByFilter } from "../../Service/RoleService";

export default function EmployeeFormPage() {
    const navigate = useNavigate();
    const params = useParams();
    const { setLoading } = useLoading();

    const [id, setId] = useState<number | undefined>(undefined)
    const [name, setName] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [gender, setGender] = useState<GenderModel | undefined>()
    const [maritalStatus, setMaritalStatus] = useState('')

    const [addressId, setAddressId] = useState<number | undefined>(undefined)
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [workCard, setWorkCard] = useState('')
    const [voterRegistration, setVoterRegistration] = useState('')
    const [license, setLicense] = useState('')
    const [passport, setPassport] = useState('')

    const [role, setRole] = useState<RoleModel>()
    const [admissionDate, setAdmissionDate] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [supervisor, setSupervisor] = useState('')

    const [contractType, setContractType] = useState<ContractTypeModel>()
    const [workRegime, setWorkRegime] = useState('')
    const [workload, setWorkload] = useState('')
    const [workplace, setWorkplace] = useState<CityBaseModel>()

    const [salary, setSalary] = useState('')
    const [additionals, setAdditionals] = useState('')
    const [benefits, setBenefits] = useState('')

    const [bank, setBank] = useState('')
    const [agency, setAgency] = useState('')
    const [account, setAccount] = useState('')

    const [emergencyContactName, setEmergencyContactName] = useState('')
    const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('')
    const [emergencyContactTelephone, setEmergencyContactTelephone] = useState('')

    const [genderOptions, setGenderOptions] = useState<GenderModel[]>([]);
    const [rolesOptions, setRolesOptions] = useState<RoleModel[]>([]);
    const [contractTypesOptions, setContractTypesOptions] = useState<ContractTypeModel[]>([]);
    const [citiesOptions, setCitiesOptions] = useState<CityBaseModel[]>([]);

    useEffect(() => {
        setId(params.id ? parseInt(params.id) : undefined);
        setLoading(true);
        findAllGenders().then((genderResponse) => {
            setGenderOptions(genderResponse.data);

            findAllRolesByFilter('', 0).then((roleReponse) => {
                setRolesOptions(roleReponse.data);

                findAllContractTypes().then((contractTypeResponse) => {
                    setContractTypesOptions(contractTypeResponse.data);

                    findAllCities().then((cityResponse) => {
                        setCitiesOptions(cityResponse.data);

                        if (id && id !== 0) {
                            findEmployeeById(id).then((employeeResponse) => {
                                const employee = employeeResponse.data;
                                setName(employee.name);
                                //setBirthDate(new Date(employee.birthdate.getTime()));
                                setGender(employee.gender)
                                setMaritalStatus('')
                                setAddressId(employee.address.id)
                                setStreet(employee.address.street)
                                setNumber(employee.address.number.toString())
                                setNeighborhood(employee.address.neighbourhood)
                                setCity(employee.address.city)
                                setEmail(employee.email)
                                setTelephone(employee.telephone)
                                setCpf(employee.cpf)
                                setRg(employee.rg)
                                setWorkCard(employee.workCard)
                                setVoterRegistration(employee.voterRegistration)
                                setLicense(employee.license)
                                setPassport(employee.passport)
                                //setAdmissionDate(employee.admissionDate.toISOString().split('T')[0])
                                setRole(employee.role)
                                setEmployeeNumber(id ? id.toString() : '')
                                setSupervisor('')
                                setContractType(employee.contractType)
                                setWorkRegime('')
                                setWorkload(employee.workTime.toString())
                                setWorkplace(employee.cityBase)
                                setSalary('')
                                //setAdditionals(employee.employeeBenefit.additional)
                                //setBenefits(employee.employeeBenefit.others.toString())
                                setBank(employee.bankNumber)
                                setAgency(employee.bankAgency)
                                setAccount(employee.bankAccount)
                                if (employee.emergencyContact.length > 0) {
                                    setEmergencyContactName(employee.emergencyContact[0].name)
                                    setEmergencyContactRelationship('')
                                    setEmergencyContactTelephone(employee.emergencyContact[0].telephone)
                                }
                                setLoading(false);
                            });
                        } else {
                            setLoading(false);
                        }
                    })
                })
            })
        })
    }, [id, params.id, setLoading])

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (gender && role && contractType && workplace) {
            const employee: EmployeeModel = {
                id: id,
                name: name,
                birthdate: new Date(birthdate),
                gender: gender,
                address: {
                    id: addressId,
                    street: street,
                    number: parseInt(number),
                    neighbourhood: neighborhood,
                    city: city
                },
                email: email,
                telephone: telephone,
                cpf: cpf,
                rg: rg,
                workCard: workCard,
                voterRegistration: voterRegistration,
                license: license,
                passport: passport,
                admissionDate: new Date(admissionDate),
                role: role,
                contractType: contractType,
                workTime: parseInt(workload),
                cityBase: workplace,
                employeeBenefit: {
                    id: 0,
                    additional: parseFloat(additionals),
                    others: parseFloat(benefits)
                },
                bankNumber: bank,
                bankAgency: agency,
                bankAccount: account,
                emergencyContact: [
                    {
                        id: 0,
                        name: emergencyContactName,
                        telephone: emergencyContactTelephone
                    }
                ]
            }

            setLoading(true);
            saveEmployee(employee).then(() => {
                setLoading(false);
                navigate('/personal-administration/employee')
            })
        }

    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <GoToTop></GoToTop>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Cancelar" transparent type="button" onClick={() => navigate('/personal-administration/employee')}></Button>
            </FormButtons>

            <Panel title="Dados Básicos">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Nome Completo: </span>
                        <Input type="text" value={name} onChange={(value) => setName(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Data de Nascimento: </span>
                        <Input type="date" value={birthdate} onChange={(value) => setBirthDate(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Gênero: </span>
                        <Select value={gender} options={genderOptions} onChange={(value) => setGender(value)}></Select>
                    </FormItem>
                    <FormItem>
                        <span>Estado Civil: </span>
                        <Input type="text" value={maritalStatus} onChange={(value) => setMaritalStatus(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Contato">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Rua/Avenida: </span>
                        <Input type="text" value={street} onChange={(value) => setStreet(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Número: </span>
                        <Input type="number" value={number} onChange={(value) => setNumber(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Bairro: </span>
                        <Input type="text" value={neighborhood} onChange={(value) => setNeighborhood(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Cidade: </span>
                        <Input type="text" value={city} onChange={(value) => setCity(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>E-mail: </span>
                        <Input type="email" value={email} onChange={(value) => setEmail(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Telefone: </span>
                        <Input type="text" value={telephone} onChange={(value) => setTelephone(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Documentação">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>CPF: </span>
                        <Input type="text" value={cpf} onChange={(value) => setCpf(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>RG - Orgão Emissor: </span>
                        <Input type="number" value={rg} onChange={(value) => setRg(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Carteira de Trabalho (Número - Série): </span>
                        <Input type="text" value={workCard} onChange={(value) => setWorkCard(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Título de Eleitor: </span>
                        <Input type="text" value={voterRegistration} onChange={(value) => setVoterRegistration(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>CNH (se houver): </span>
                        <Input type="text" value={license} onChange={(value) => setLicense(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Passaporte (se houver): </span>
                        <Input type="text" value={passport} onChange={(value) => setPassport(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Cargo e Departamento">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Cargo/função: </span>
                        <Select options={rolesOptions} value={role} onChange={(value) => setRole(value)}></Select>
                    </FormItem>
                    <FormItem>
                        <span>Departamento/setor: </span>
                        <Input type="text" value={role?.department.name} disabled></Input>
                    </FormItem>
                    <FormItem>
                        <span>Data de admissão: </span>
                        <Input type="date" value={admissionDate} onChange={(value) => setAdmissionDate(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Matrícula do funcionário: </span>
                        <Input type="text" value={employeeNumber} onChange={(value) => setEmployeeNumber(value)} disabled></Input>
                    </FormItem>
                    <FormItem>
                        <span>Supervisor imediato: </span>
                        <Input type="text" value={supervisor} onChange={(value) => setSupervisor(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Contratação">
                <ResponsiveGrid columns={2}>
                    <FormItem>
                        <span>Tipo de contrato: </span>
                        <Select value={contractType} options={contractTypesOptions} onChange={(value) => setContractType(value)}></Select>
                    </FormItem>
                    <FormItem>
                        <span>Regime de trabalho: </span>
                        <Input type="text" value={workRegime} onChange={(value) => setWorkRegime(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Jornada de trabalho: </span>
                        <Input type="text" value={workload} onChange={(value) => setWorkload(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Local de trabalho: </span>
                        <Select value={workplace} options={citiesOptions} optionLabel="city" onChange={(value) => setWorkplace(value)}></Select>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Salário e Benefícios">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <span>Salário base: </span>
                        <Input type="text" value={salary} onChange={(value) => setSalary(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Adicionais (periculosidade, insalubridade): </span>
                        <Input type="text" value={additionals} onChange={(value) => setAdditionals(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Benefícios (vale-transporte, vale-alimentação, plano de saúde, etc.): </span>
                        <Input type="text" value={benefits} onChange={(value) => setBenefits(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Informações Bancárias">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <span>Banco: </span>
                        <Input type="text" value={bank} onChange={(value) => setBank(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Agência: </span>
                        <Input type="text" value={agency} onChange={(value) => setAgency(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Conta corrente: </span>
                        <Input type="text" value={account} onChange={(value) => setAccount(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
            <Panel title="Contato de Emergência">
                <ResponsiveGrid columns={1}>
                    <FormItem>
                        <span>Nome: </span>
                        <Input type="text" value={emergencyContactName} onChange={(value) => setEmergencyContactName(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Parentesco: </span>
                        <Input type="text" value={emergencyContactRelationship} onChange={(value) => setEmergencyContactRelationship(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Telefone: </span>
                        <Input type="text" value={emergencyContactTelephone} onChange={(value) => setEmergencyContactTelephone(value)}></Input>
                    </FormItem>
                </ResponsiveGrid>
            </Panel>
        </form>
    )
}