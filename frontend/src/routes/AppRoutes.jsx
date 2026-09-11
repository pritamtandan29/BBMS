import {Routes, Route} from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Donors from "../pages/Donors/Donors";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Inventory from "../pages/Inventory/Inventory";
import Requests from "../pages/Requests/Requests";


function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/requests" element={<Requests />} />
        </Routes>
    );
}

export default AppRoutes;
