
import React from 'react';

import { Route, Routes } from "react-router-dom";
import Scheduler from "../02.Scheduler/Scheduler";
import Dashboard from "../03.Dashboard/Dashboard";
import ConnectBoard from "../04.Connect/ConnectBoard";
export function RouterMain() {
    return (
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Connect" element={<ConnectBoard />}></Route>
            <Route path="/Schedule" element={<Scheduler />}></Route>
        </Routes>

    )
}
