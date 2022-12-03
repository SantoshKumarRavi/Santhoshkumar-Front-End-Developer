import React, { useRef, useState,useEffect } from 'react'
import { DataConsumer } from '../UseAuth/UseData'
import "../App.css"
const Gridlayout = () => {
  const datavalue=DataConsumer()
  console.log("grid data",datavalue)
  const[page,setpage]=useState(1)
  // const[totalpages,settotalpages]=useState({})
  // const[filteredpagedata,setfilteredpagedata]=useState({})
  // const[showdetails,setShowdetails]=useState({})
  const popref=useRef(null)
  function changepage(e){
    setpage( e.target.id)
  }
  function showpopup(e){
    console.log("clicked show opo up")
  const id=(e.target.id)
    let filterpopup=[...datavalue?.data?.datas]
    // console.log("filtered",filterpopup)

    filterpopup=filterpopup.filter((ele)=>{
      let value=0
      if(id===ele.capsule_serial){
        value=ele
      }
      return value
    })
    datavalue.setShowdetails(()=>{
      return {
        data:filterpopup
      }
    })
    console.log("after filtered",filterpopup)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popref.current &&
        !popref.current.contains(event.target)
      ) {
        datavalue.setShowdetails({})
      }
    };
    if( datavalue.showdetails?.data){
      console.log("activeted")
      setTimeout(()=>{
        document.addEventListener("click", handleClickOutside,false);
      },1000)
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [datavalue]);

  return (
    <>
    <div>
      <div className='grid_container'>
      {datavalue?.data?.datas?.slice(((page*10)-10),page*10).map((x,i)=><div onClick={(e)=>showpopup(e)} id={x.capsule_serial} key={i}>{x.status}</div>)
        }
         {
          datavalue.showdetails?.data?.map((eleobj,i)=><div ref={popref} className='popup'  key={i}>{eleobj.status}</div>)
        }
      </div>
        {
          datavalue?.totalpage?.datas?.map((x,i)=><div id={x} onClick={(e)=>changepage(e)} key={i}>{x}</div>)
        }
    </div>
    </>
  )
}

export default Gridlayout