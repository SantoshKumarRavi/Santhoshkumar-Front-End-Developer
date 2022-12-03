import React, { useEffect } from 'react'
import Banner from '../Layouts/Banner'
import Searchbar from '../Layouts/Searchbar'
import Gridlayout from '../Layouts/Gridlayout'
import {AuthConsumer} from "../UseAuth/UseAuth"
// import { DataProvider } from '../UseAuth/UseData'
import { DataConsumer } from '../UseAuth/UseData'
import Logout from '../Logout/Logout'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const value = AuthConsumer();
  const datavalue=DataConsumer()
  console.log("datavalue in home",datavalue?.showdetails?.data?.length!==undefined)

  const Navigate=useNavigate()
// const[fetcheddata,setfetcheddata]=useState({})
  console.log("access token",value?.accesstoken)
  function logout(){
    value.setValue("")
    Navigate("/login")
  }
 
  useEffect(()=>{
    if (value.accesstoken === "") {
      Navigate("/login"); //as of now commented for css 
    }
  },[Navigate,value?.accesstoken])
  return (
    // <DataProvider>
    <div className="page-wrapper">
    {datavalue?.showdetails?.data &&<div className={(datavalue?.showdetails?.data?.length!==undefined)?"opacity":""}>

    </div>}
    <Logout functionality={logout}/>
    <Banner/>
    <Searchbar/>
    <Gridlayout/>
    </div>
    // </DataProvider>
  )
}

export default Home