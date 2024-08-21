import { Route, Routes } from "react-router-dom";
import Scheduler from "../02.Scheduler/Scheduler";
import Dashboard from "../03.Dashboard/Dashboard";
import ConnectBoard from "../04.Connect/ConnectBoard";
import CreateBoard from "../05.Create/CreateBoard";
import Leaderboard from "../998.Leaderboard/Leaderboard";
export function RouterMain() {
    return (
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Connect" element={<ConnectBoard />}></Route>
            <Route path="/Schedule" element={<Scheduler />}></Route>
            <Route path="/Create" element={<CreateBoard />}></Route>
            {
                //TESTS - REMOVE
            }
            <Route path="Leaderboard-test" element={<Leaderboard />}></Route>
        </Routes>
    )
}
