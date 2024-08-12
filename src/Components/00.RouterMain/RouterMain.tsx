import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scheduler from "../02.Scheduler/Scheduler";
import LoginPage from "../999.Login/Login";
export function RouterMain(){
    return(
        <Routes>
        <Route path="/Schedule" element={<Scheduler/>}></Route>
        </Routes>
        
    )
}
