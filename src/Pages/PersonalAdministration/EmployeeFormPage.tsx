import { useState } from "react";
import Button from "../../Components/Button";
import FormButtons from "../../Components/FormButtons";
import FormItem from "../../Components/FormItem";
import Input from "../../Components/Input";
import Panel from "../../Components/Panel";
import ResponsiveGrid from "../../Components/ResponsiveGrid";
import Select from "../../Components/Select";
import { GenderTypeEnum } from "../../Model/GenderTypeEnum";
import { enumToJsonArray } from "../../Utils/GeneralUtils";
import { ContractTypeEnum } from "../../Model/ContractTypeEnum";
import { EmployeeModel } from "../../Model/EmployeeModel";

export default function EmployeeFormPage() {
    const [name, setName] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [gender, setGender] = useState<any>('')
    const [maritalStatus, setMaritalStatus] = useState('')
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

    const [role, setRole] = useState('')
    const [department, setDepartment] = useState('')
    const [admissionDate, setAdmissionDate] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [supervisor, setSupervisor] = useState('')

    const [contractType, setContractType] = useState<any>('')
    const [workRegime, setWorkRegime] = useState('')
    const [workload, setWorkload] = useState('')
    const [workplace, setWorkplace] = useState('')

    const [salary, setSalary] = useState('')
    const [additionals, setAdditionals] = useState('')
    const [benefits, setBenefits] = useState('')

    const [bank, setBank] = useState('')
    const [agency, setAgency] = useState('')
    const [account, setAccount] = useState('')

    const [emergencyContactName, setEmergencyContactName] = useState('')
    const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('')
    const [emergencyContactTelephone, setEmergencyContactTelephone] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()

        const employee: EmployeeModel = {
            id: 0,
            name: name,
            birthdate: new Date(birthdate),
            gender: gender['name'],
            address: {
                id: 0,
                street: street,
                number: Number(number),
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
            role: {
                id: 0,
                name: role,
                createdAt: new Date()
            },
            contractType: contractType['name'],
            workTime: Number(workload),
            cityBase: {
                id: 0,
                city: city,
                createdAt: new Date()
            },
            employeeBenefit: {
                id: 0,
                additional: Number(additionals),
                others: Number(benefits)
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

        console.log(employee);
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <FormButtons align="end">
                <Button label="Salvar" type="submit"></Button>
                <Button label="Cancelar" transparent type="button"></Button>
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
                        <Select value={gender} options={enumToJsonArray(GenderTypeEnum)} onChange={(value) => setGender(value)}></Select>
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
                        <Input type="email" value={voterRegistration} onChange={(value) => setVoterRegistration(value)}></Input>
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
                        <Input type="text" value={role} onChange={(value) => setRole(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Departamento/setor: </span>
                        <Input type="text" value={department} onChange={(value) => setDepartment(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Data de admissão: </span>
                        <Input type="date" value={admissionDate} onChange={(value) => setAdmissionDate(value)}></Input>
                    </FormItem>
                    <FormItem>
                        <span>Matrícula do funcionário: </span>
                        <Input type="text" value={employeeNumber} onChange={(value) => setEmployeeNumber(value)}></Input>
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
                        <Select value={contractType} options={enumToJsonArray(ContractTypeEnum)} onChange={(value) => setContractType(value)}></Select>
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
                        <Input type="text" value={workplace} onChange={(value) => setWorkplace(value)}></Input>
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