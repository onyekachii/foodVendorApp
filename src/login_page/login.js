import LoginForm from "./loginform";
import SignupForm from "./signupform";
import "./login.css";
import { Link } from "react-router-dom";
import {ImCancelCircle} from "react-icons/im";



function Login() {
    return (
        <div id="loginBody">        
            <div id= "loginHead">
                <Link to="/"> <ImCancelCircle /> &nbsp; Go Back Home </Link>
            </div>
            
            <div className="login_create">
                <div id="login_click">
                    <p>LOGIN</p>
                </div>
                <div>
                    <p>SIGN UP</p>
                </div>
            </div>
            
            <LoginForm />
            <SignupForm />
        </div>
     
    )
}

export default Login;





























