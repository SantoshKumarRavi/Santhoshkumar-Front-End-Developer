import React,{useState} from 'react'
import { DataConsumer } from '../UseAuth/UseData'

const Searchbar = () => {
  const datavalue=DataConsumer()
  // console.log("search data",datavalue)
  const [data,setdata]=useState({
    status:"",
    original_launch:"",
    type:""
})
function filterdata(e){
e.preventDefault();
let contextdata=datavalue?.data?.datas
// let fileteredarray=
const {status,original_launch,type}=data
// console.log("clicked folter",contextdata)
let Statusregex=new RegExp(`${status}`) 
let launchregex=new RegExp(`${original_launch}`) 
let typeregex=new RegExp(`${type}`) 
contextdata=contextdata.filter((objele)=>{
  let value=0
  if((status!==""&&Statusregex.test(objele.status))&&(original_launch!==""&&launchregex.test(objele.original_launch))&&(type!==""&&typeregex.test(objele.type))){
    value=objele
  }
  return value
})
console.log("filtered data ==>",contextdata)
}

function processingdata(e){
  let updated={...data}
  updated[e.target.name]=e.target.value
  setdata(()=>updated)
}
const{status,original_launch,type}=data
  return (
    <>
    <div>
      <h2>Make decision based on Datas</h2>
      <form  onSubmit={(e)=>filterdata(e)} >
        <input value={status} onChange={(e)=>processingdata(e)}  type={"text"} name={"status"} placeholder="status"/>
        <input value={original_launch} onChange={(e)=>processingdata(e)} type={"text"} name={"original_launch"}  placeholder="original_launch"/>
        <input value={type} onChange={(e)=>processingdata(e)} type={"text"} name={"type"}  placeholder="type"/>
        <input type={"submit"} value="Search"/>
    </form>
    
    </div>
    </>
  )
}

export default Searchbar