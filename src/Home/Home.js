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
  function logout(){
    value.setaccesstoken(()=>{})
    Navigate("/login")
  }
 
  useEffect(()=>{
    if ((value.accesstoken===undefined)) {
      Navigate("/login");
    }
  console.log("access token not",value)

  },[Navigate,value])
  return (
    <>
    <div className="main-page-wrapper">
    <div className="page-wrapper">
    {datavalue?.showdetails?.data &&<div className={(datavalue?.showdetails?.data?.length!==undefined)?"opacity":""}>
        
    </div>}
    <div className='banner-logout-wrapper'>
    <Logout classname={'logout-btn'} functionality={logout}/>
    <Banner/>
    </div>
    </div>
    <Searchbar/>
    <Gridlayout/>
    </div>
    </>
  )
}

export default Home