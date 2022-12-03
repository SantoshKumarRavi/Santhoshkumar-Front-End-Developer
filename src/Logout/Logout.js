import React from 'react'

const Logout = ({functionality}) => {
  return (
    <>
    <button onClick={()=>functionality()}>Logout</button>
    </>
  )
}

export default Logout