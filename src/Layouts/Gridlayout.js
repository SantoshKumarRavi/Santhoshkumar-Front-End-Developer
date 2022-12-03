import React from 'react'
import { DataConsumer } from '../UseAuth/UseData'

const Gridlayout = () => {
  const datavalue=DataConsumer()
  console.log("grid data",datavalue)

  return (
    <>
    
    <div>Grid</div>
    </>
  )
}

export default Gridlayout