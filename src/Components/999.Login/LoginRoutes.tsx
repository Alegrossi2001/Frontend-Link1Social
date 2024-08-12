import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Login";
import SignupPage from "./Signup";

interface LoginPageProps{
    SetLogin : () => void,
  }
  

const LoginRoutes : React.FC<LoginPageProps> = ({SetLogin}) => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage SetLogin={SetLogin}/>}></Route>
            <Route path="/signup" element = {<SignupPage/>}> </Route>
        </Routes>
        
    )
}

export default LoginRoutes;
