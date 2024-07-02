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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>
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