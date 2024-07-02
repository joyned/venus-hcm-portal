import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Layout/Root";
import EmployeeFormPage from "./Pages/PersonalAdministration/EmployeeFormPage";
import EmployeePage from "./Pages/PersonalAdministration/EmployeePage";
import RoleAndFunctionsHistoryPage from "./Pages/PersonalAdministration/RoleAndFunctionsHistoryPage";
import RolePublishingPage from "./Pages/Recruitment/RolePublishingPage";
import RolePublishingFormPage from "./Pages/Recruitment/RolePublishingFormPage";
import ResumeScreeningPage from "./Pages/Recruitment/ResumeScreeningPage";
import InterviewManagementPage from "./Pages/Recruitment/InterviewManagementPage";
import EmployeeOnboardingPage from "./Pages/Recruitment/EmployeeOnboardingPage";
import LoginPage from "./Pages/LoginPage";
import RolePage from "./Pages/RolesAndDepartament/RolePage";
import RoleFormPage from "./Pages/RolesAndDepartament/RoleFormPage";
import DepartmentPage from "./Pages/RolesAndDepartament/DepartmentPage";
import DepartmentFormPage from "./Pages/RolesAndDepartament/DepartmentFormPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage></LoginPage>
    },
    {
        path: "job-and-departments",
        children: [
            {
                path: "job",
                element: <Root><RolePage></RolePage></Root>
            },
            {
                path: "job/:id",
                element: <Root><RoleFormPage></RoleFormPage></Root>
            },
            {
                path: "department",
                element: <Root><DepartmentPage></DepartmentPage></Root>
            },
            {
                path: "department/:id",
                element: <Root><DepartmentFormPage></DepartmentFormPage></Root>
            }
        ]
    },
    {
        path: "/personal-administration",
        children: [
            {
                path: "employee",
                element: <Root><EmployeePage></EmployeePage></Root>
            },
            {
                path: "employee/:id",
                element: <Root><EmployeeFormPage></EmployeeFormPage></Root>
            },
            {
                path: "functions-history",
                element: <Root><RoleAndFunctionsHistoryPage></RoleAndFunctionsHistoryPage></Root>
            }
        ]
    },
    {
        path: '/recruitment',
        children: [
            {
                path: "publishing",
                element: <Root><RolePublishingPage></RolePublishingPage></Root>
            },
            {
                path: "publishing/:id",
                element: <Root><RolePublishingFormPage></RolePublishingFormPage></Root>
            },
            {
                path: "resume-screening",
                element: <Root><ResumeScreeningPage></ResumeScreeningPage></Root>
            },
            {
                path: "interview-management",
                element: <Root><InterviewManagementPage></InterviewManagementPage></Root>
            },
            {
                path: "employee-onboarding",
                element: <Root><EmployeeOnboardingPage></EmployeeOnboardingPage></Root>
            }
        ]
    }
]);

export default router;