import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Layout/Root";
import EmployeePage from "./Pages/Employee/EmployeePage";
import EmployeeFormPage from "./Pages/Employee/EmployeeFormPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>
    },
    {
        path: "/employee",
        children: [
            {
                path: "",
                element: <Root><EmployeePage></EmployeePage></Root>
            },
            {
                path: ":id",
                element: <Root><EmployeeFormPage></EmployeeFormPage></Root>
            }
        ]
    }
]);

export default router;