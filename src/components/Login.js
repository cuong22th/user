import { useEffect, useState } from "react";
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";


const Login=()=>{
    const navigate = useNavigate(); //hook navigation
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isShowPassword, setIsShowPassword] = useState(false);
    const [loadingApi, setLoadingApi] = useState(false);

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if (token){
            navigate("/");
        }
    }, [])
    const handalLogin = async () =>{
            if(!email || !password){
                toast.error("đăng nhập không thành công");
                return;
            }else
            {
                setLoadingApi(true);
                let res = await loginApi(email, password);
                // console.log(">>>>check ",res);
                if(res && res.token){
                    localStorage.setItem("token", res.token);
                    navigate("/");
                }
                else{
                    if(res && res.status===400){
                        toast.error(res.data.error)
                    }
                }
                setLoadingApi(false);
            }
    }

    return(<>
        <div className="login-container col-12 col-sm-4">
            <div className="title">Login</div>
            <div className="text"> Email or username (eve.holt@reqres.in)</div>
            <input
                type="text"
                placeholder="Email or name..."
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
              /> 
            <div className="input-2">
                <input 
                    type= {isShowPassword === true ? "text" : "password"}
                    placeholder="Password..."
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash" }
                onClick={() => setIsShowPassword(!isShowPassword)}></i>
            </div>
            <button 
                className={email && password ? "active" : " "}
                disabled = {email && password ? false : true}
                onClick={()=>handalLogin()}
            >
                {loadingApi && <i className="fa-solid fa-sync fa-spin"></i>} Login</button>
            <div className="back">
                <i className="fa-solid fa-angles-left"></i>Go back
            </div>
        </div>
    
    </>)

}
export default Login;