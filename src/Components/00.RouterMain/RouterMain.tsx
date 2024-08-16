import { Route, Routes } from "react-router-dom";
import Scheduler from "../02.Scheduler/Scheduler";
import Dashboard from "../03.Dashboard/Dashboard";
import ConnectBoard from "../04.Connect/ConnectBoard";
import CreateBoard from "../05.Create/CreateBoard";
export function RouterMain() {
    return (
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Connect" element={<ConnectBoard />}></Route>
            <Route path="/Schedule" element={<Scheduler />}></Route>
            <Route path="/Create" element={<CreateBoard />}></Route>
        </Routes>

    )
}
