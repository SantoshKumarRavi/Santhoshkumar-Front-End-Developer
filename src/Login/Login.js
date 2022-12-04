import React ,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import { AuthConsumer } from '../UseAuth/UseAuth'

const Login = () => {
    const [data,setdata]=useState({
        email:"",
        password:"",
        error:"",
    })
    const Navigate=useNavigate()
    let values=AuthConsumer()

    function processingdata(e){
        console.log("preessing==>")
        let updated={...data}
        updated[e.target.name]=e.target.value
        setdata(()=>updated)
    }
function loginuser(e){
    e.preventDefault()
    let tobesenddata={
        email:data.email,
        password:data.password
    }
    fetch("http://localhost:8081/login",{
        method:"POST",
        body:JSON.stringify(tobesenddata),
        headers: {'Content-Type': 'application/json'}
    }).then((res)=>res.json()).then((result)=>{
            if(result.status==="failed"){
                let updated={...data}
                updated["error"]=result.message
                setdata(()=>updated)
            }else{
                console.log("successs ",result)
                values.setaccesstoken(()=>{
                    return {token:result.jwt_token}})
                Navigate("/Home")
            }
    })

}
    const {email,password,error}=data
    return (
        <div>
            <h2>Login</h2>
        <form onSubmit={(e)=>loginuser(e)}>
            <input value={email} onChange={(e)=>processingdata(e)}  type={"email"} name={"email"} placeholder="email"/>
            <input value={password} onChange={(e)=>processingdata(e)} type={"password"} name={"password"}  placeholder="password"/>
            <input type={"submit"} value="Login"/>
        </form>
            {error?.length !==0 && <p>{error}</p>}
            <Link to="/signup"><button>Signup</button></Link>
        </div>
      )
}

export default Login