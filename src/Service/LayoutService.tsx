import VenusHCMMenu from "../Model/VenusHCMMenu";

const hcmMenu: VenusHCMMenu[] = [
    {
        name: "Cargo e Departamentos",
        subMenu: [
            { name: "Cadastro de cargos", uri: "/roles-and-departments/role", subMenu: [] },
            { name: "Cadastro de departamentos", uri: "/roles-and-departments/department", subMenu: [] },
            { name: "Histórico de cargos e funções", uri: "/roles-and-departments/functions-history", subMenu: [] },
        ]
    },
    {
        name: "Administração de Pessoal",
        subMenu: [
            { name: "Cadastro de funcionários", uri: "/personal-administration/employee", subMenu: [] },
            { name: "Histórico de cargos e funções", uri: "/personal-administration/functions-history", subMenu: [] },
        ],
    },
    {
        name: "Recrutamento e Seleção",
        subMenu: [
            { name: "Publicação de vagas", uri: "/recruitment/publishing", subMenu: [] },
            { name: "Triagem de currículos", uri: "/recruitment/resume-screening", subMenu: [] },
            { name: "Gestão de entrevistas", uri: "/recruitment/interview-management", subMenu: [] },
            { name: "Onboarding de novos funcionários", uri: "/recruitment/employee-onboarding", subMenu: [] },
        ],
    },
    {
        name: "Gestão de Desempenho",
        subMenu: [
            { name: "Avaliações de desempenho", subMenu: [] },
            { name: "Metas e objetivos", subMenu: [] },
            { name: "Feedback contínuo", subMenu: [] },
        ],
    },
    {
        name: "Treinamento e Desenvolvimento",
        subMenu: [
            { name: "Planos de carreira", subMenu: [] },
            { name: "Programas de treinamento", subMenu: [] },
            { name: "Gestão de competências", subMenu: [] },
            { name: "Avaliação de eficácia dos treinamentos", subMenu: [] },
        ],
    },
    {
        name: "Gestão de Benefícios",
        subMenu: [
            { name: "Planos de saúde", subMenu: [] },
            { name: "Previdência privada", subMenu: [] },
            { name: "Vale-refeição/alimentação", subMenu: [] },
            { name: "Benefícios flexíveis", subMenu: [] },
        ],
    },
    {
        name: "Folha de Pagamento",
        subMenu: [
            { name: "Cálculo de salários", subMenu: [] },
            { name: "Gestão de impostos e contribuições", subMenu: [] },
            { name: "Controle de horas extras e adicionais", subMenu: [] },
            { name: "Emissão de contracheques", subMenu: [] },
        ],
    },
    {
        name: "Gestão de Tempo e Presença",
        subMenu: [
            { name: "Controle de ponto eletrônico", subMenu: [] },
            { name: "Gestão de jornadas de trabalho", subMenu: [] },
            { name: "Planejamento de escalas e turnos", subMenu: [] },
            { name: "Gestão de ausências e férias", subMenu: [] },
        ],
    },
    {
        name: "Segurança e Saúde no Trabalho (SST)",
        subMenu: [
            { name: "Programas de prevenção de riscos", subMenu: [] },
            { name: "Controle de EPIs (Equipamentos de Proteção Individual)", subMenu: [] },
            { name: "Gestão de acidentes de trabalho", subMenu: [] },
            { name: "Exames médicos periódicos", subMenu: [] },
        ],
    },
    {
        name: "Administração de Compensação",
        subMenu: [
            { name: "Estrutura de cargos e salários", subMenu: [] },
            { name: "Pesquisas salariais", subMenu: [] },
            { name: "Políticas de remuneração", subMenu: [] },
        ],
    },
    {
        name: "Gestão de Relacionamento com Empregados",
        subMenu: [
            { name: "Comunicação interna", subMenu: [] },
            { name: "Pesquisa de clima organizacional", subMenu: [] },
            { name: "Gestão de conflitos", subMenu: [] },
        ],
    },
    {
        name: "Relatórios e Analytics",
        subMenu: [
            { name: "Relatórios de RH", subMenu: [] },
            { name: "Dashboards de desempenho", subMenu: [] },
            { name: "Análise de dados de RH", subMenu: [] },
        ],
    },
    {
        name: "Compliance e Governança",
        subMenu: [
            { name: "Políticas e procedimentos", subMenu: [] },
            { name: "Conformidade com legislação trabalhista", subMenu: [] },
            { name: "Auditorias internas de RH", subMenu: [] },
        ],
    },
    {
        name: "Gestão de Talentos",
        subMenu: [
            { name: "Identificação de talentos", subMenu: [] },
            { name: "Sucessão e planejamento de carreira", subMenu: [] },
            { name: "Retenção de talentos", subMenu: [] },
        ],
    },
    {
        name: "Software e Integrações",
        subMenu: [
            { name: "Cadastro de Integrações", subMenu: [] },
            { name: "Leitura de Dados", subMenu: [] },
        ]
    }
];


export { hcmMenu }