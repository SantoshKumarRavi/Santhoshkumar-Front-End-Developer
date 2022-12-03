import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"

const Signup = () => {
function postuserdata(e){
    e.preventDefault()
    const{password,confirmpassword}=data
    if(password!==confirmpassword){
        let updated={...data}
        updated["error"]="Password did nto match"
        setdata(()=>updated)
    }else{
        let tobesenddata={
            email:data.email,
            password:data.password
        }
         fetch("http://localhost:8081/signup",{
            method:"POST",
            body:JSON.stringify(tobesenddata),
            headers: {'Content-Type': 'application/json'}
        }).then((res)=>res.json()).then((result)=>{
                console.log(result)
                let updated={...data}
                updated["response"]=result.message
                updated["error"]=""
                setdata(()=>updated)
                Navigate("/login")
        })
    }

}
const [data,setdata]=useState({
    email:"",
    password:"",
    confirmpassword:"",
    error:"",
    response:""
})
const Navigate=useNavigate()
function processingdata(e){
    let updated={...data}
    updated[e.target.name]=e.target.value
    setdata(()=>updated)
}
const {email,password,confirmpassword,error,response}=data

  return (
    <div>
        <h2>Register</h2>
    <form onSubmit={(e)=>postuserdata(e)}>
        <input value={email} onChange={(e)=>processingdata(e)}  type={"email"} name={"email"} placeholder="email"/>
        <input value={password} onChange={(e)=>processingdata(e)} type={"password"} name={"password"}  placeholder="password"/>
        <input value={confirmpassword} onChange={(e)=>processingdata(e)} type={"password"} name={"confirmpassword"}  placeholder="confirm password"/>
        <input type={"submit"} value="Register"/>
    </form>
        {error?.length !==0 && <p>{error}</p>}
        {response?.length !==0 && <p>{response}</p>}
    <Link to="/login"><button>Login</button></Link>
    </div>
  )
}

export default Signup