import React, { useState,useEffect } from "react";

const DataContext = React.createContext();

export function DataProvider({ children }) {
  const [data,setdata] = useState({});
  const [pageArray,setpageArray] = useState({});
  const[showdetails,setShowdetails]=useState({})

  useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/capsules',{
      method:"GET",
      headers: {
    //   'Authorization': value?.accesstoken,
      'User-Agent':'PostmanRuntime/7.29.2',
      'Accept':'*/*',
      'Accept-Encoding':'gzip, deflate, br',
      'Connection':'keep-alive'
        }
    }).then((res)=>res.json()).then((result)=>{
              console.log("fetched==>",result)
              let totalpage=Math.ceil(result.length/10)
              let totalpageArray=[]
              for(let i=1;i<=totalpage;i++){
                totalpageArray.push(i)
              }
              setpageArray(()=>{
                return{
                  datas:totalpageArray
                }
              })

              setdata(()=>{
                return{
                  datas:result
                }
              })
  })
  },[])
  const value = {
    data: data,
    setdata,
    totalpage:pageArray,
    showdetails,
    setShowdetails
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export  function DataConsumer() {
  return React.useContext(DataContext);
}
