import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scheduler from "../02.Scheduler/Scheduler";
import LoginPage from "../999.Login/Login";
import Dashboard from "../03.Dashboard/Dashboard";
export function RouterMain(){
    return(
        <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Schedule" element={<Scheduler/>}></Route>
        </Routes>
        
    )
}
