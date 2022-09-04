import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardCliente from '../pages/DashboardCliente/dashboardCliente';
import DashboardRestaurante from '../pages/DashboardRestaurante';
import Landingpage from '../pages/Landingpage/Landingpage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AuthRoutes from './AuthRoutes';


const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/intro" element={<Landingpage/>}/>
            <Route path="/menu" element={<DashboardCliente/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
              <Route element={<AuthRoutes/>}>
                <Route path="/dashboard/:id" element={<DashboardRestaurante />}/>
              </Route>
            <Route path="*" element={<Navigate replace to="/intro"/>}/>
        </Routes>
    )
}

export default RoutesMain