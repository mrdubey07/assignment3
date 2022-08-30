import DashboardPage from "../Pages/DashboardPage";
import LoginPage from "../Pages/LoginPage";


const allRoutes = [
    {
        path: '/dashboard',
        component: <DashboardPage/>,
        id: 1
    },
    {
        path: '/',
        component: <LoginPage/>,
        id: 2
    }
]

export default allRoutes;