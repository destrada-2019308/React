import { AuthPage } from "./Pages/Auth/AuthPage.jsx";
import { Dashboard } from "./components/dashboardContent/DashboardContent.jsx";

export const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <Dashboard/>}
]