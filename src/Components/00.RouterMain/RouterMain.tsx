import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scheduler from "../02.Scheduler/Scheduler";
export function RouterMain(){
    return(
        <Router>
            <Routes>
                <Route path="/Schedule" element={<Scheduler/>}></Route>
            </Routes>
        </Router>
    )
}
