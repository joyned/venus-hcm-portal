import VenusHCMMenu from "../Model/VenusHCMMenu";

const hcmMenu: VenusHCMMenu[] = [
    {
        name: "menu.rolesAndDepartments",
        subMenu: [
            { name: "menu.roleRegister", uri: "/roles-and-departments/role", subMenu: [] },
            { name: "menu.departmentRegister", uri: "/roles-and-departments/department", subMenu: [] },
        ]
    },
    {
        name: "menu.personnelAdministration",
        subMenu: [
            { name: "menu.employeeRegistration", uri: "/personal-administration/employee", subMenu: [] },
            { name: "menu.jobAndFunctionHistory", uri: "/personal-administration/functions-history", subMenu: [] },
        ],
    },
    {
        name: "menu.recruitmentAndSelection",
        subMenu: [
            { name: "menu.jobPosting", uri: "/recruitment/publishing", subMenu: [] },
            { name: "menu.resumeScreening", uri: "/recruitment/resume-screening", subMenu: [] },
            { name: "menu.interviewManagement", uri: "/recruitment/interview-management", subMenu: [] },
            { name: "menu.newEmployeeOnboarding", uri: "/recruitment/employee-onboarding", subMenu: [] },
        ],
    },
    {
        name: "menu.performanceManagement",
        subMenu: [
            { name: "menu.performanceEvaluations", subMenu: [] },
            { name: "menu.goalsAndObjectives", subMenu: [] },
            { name: "menu.continuousFeedback", subMenu: [] },
        ],
    },
    {
        name: "menu.trainingAndDevelopment",
        subMenu: [
            { name: "menu.careerPlans", subMenu: [] },
            { name: "menu.trainingPrograms", subMenu: [] },
            { name: "menu.competencyManagement", subMenu: [] },
            { name: "menu.trainingEffectivenessEvaluation", subMenu: [] },
        ],
    },
    {
        name: "menu.benefitsManagement",
        subMenu: [
            { name: "menu.healthPlans", subMenu: [] },
            { name: "menu.privatePension", subMenu: [] },
            { name: "menu.mealFoodVoucher", subMenu: [] },
            { name: "menu.flexibleBenefits", subMenu: [] },
        ],
    },
    {
        name: "menu.payroll",
        subMenu: [
            { name: "menu.salaryCalculation", subMenu: [] },
            { name: "menu.taxAndContributionManagement", subMenu: [] },
            { name: "menu.overtimeAndAdditionalPayControl", subMenu: [] },
            { name: "menu.paycheckIssuance", subMenu: [] },
        ],
    },
    {
        name: "menu.timeAndAttendanceManagement",
        subMenu: [
            { name: "menu.electronicTimekeeping", subMenu: [] },
            { name: "menu.workScheduleManagement", subMenu: [] },
            { name: "menu.shiftAndSchedulePlanning", subMenu: [] },
            { name: "menu.absenceAndVacationManagement", subMenu: [] },
        ],
    },
    {
        name: "menu.occupationalHealthAndSafety",
        subMenu: [
            { name: "menu.riskPreventionPrograms", subMenu: [] },
            { name: "menu.ppeControl", subMenu: [] },
            { name: "menu.workAccidentManagement", subMenu: [] },
            { name: "menu.periodicMedicalExaminations", subMenu: [] },
        ],
    },
    {
        name: "menu.compensationAdministration",
        subMenu: [
            { name: "menu.jobAndSalaryStructure", subMenu: [] },
            { name: "menu.salarySurveys", subMenu: [] },
            { name: "menu.remunerationPolicies", subMenu: [] },
        ],
    },
    {
        name: "menu.employeeRelationshipManagement",
        subMenu: [
            { name: "menu.internalCommunication", subMenu: [] },
            { name: "menu.organizationalClimateSurvey", subMenu: [] },
            { name: "menu.conflictManagement", subMenu: [] },
        ],
    },
    {
        name: "menu.reportsAndAnalytics",
        subMenu: [
            { name: "menu.hrReports", subMenu: [] },
            { name: "menu.performanceDashboards", subMenu: [] },
            { name: "menu.hrDataAnalysis", subMenu: [] },
        ],
    },
    {
        name: "menu.complianceAndGovernance",
        subMenu: [
            { name: "menu.policiesAndProcedures", subMenu: [] },
            { name: "menu.complianceWithLaborLegislation", subMenu: [] },
            { name: "menu.internalHrAudits", subMenu: [] },
        ],
    },
    {
        name: "menu.talentManagement",
        subMenu: [
            { name: "menu.talentIdentification", subMenu: [] },
            { name: "menu.successionAndCareerPlanning", subMenu: [] },
            { name: "menu.talentRetention", subMenu: [] },
        ],
    },
    {
        name: "menu.internalAdministration",
        subMenu: [
            { name: "menu.bases", subMenu: [] },
            { name: "menu.typesOfContracts", subMenu: [] },
            { name: "menu.diversityInclusion", subMenu: [] },
        ],
    },
    {
        name: "menu.softwareAndIntegrations",
        subMenu: [
            { name: "menu.integrationRegistration", subMenu: [] },
            { name: "menu.dataReading", subMenu: [] },
        ]
    }
];

export { hcmMenu }