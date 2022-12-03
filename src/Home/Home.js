import React, { useEffect } from 'react'
import Banner from '../Layouts/Banner'
import Searchbar from '../Layouts/Searchbar'
import Gridlayout from '../Layouts/Gridlayout'
import {AuthConsumer} from "../UseAuth/UseAuth"
import Logout from '../Logout/Logout'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const value = AuthConsumer();
  const Navigate=useNavigate()

  console.log("access token",value?.accesstoken)
  function logout(){
    value.setValue("")
    Navigate("/login")
  }
  useEffect(()=>{
    if (value.accesstoken === "") {
      Navigate("/login");
    }
  },[Navigate,value?.accesstoken])
  return (
    <div>
    <Logout functionality={logout}/>
    <Banner/>
    <Searchbar/>
    <Gridlayout/>
    </div>
  )
}

export default Home