import React from 'react'

const Logout = ({functionality,classname}) => {
  return (
    <>
    <button className={classname} onClick={()=>functionality()}>Logout</button>
    </>
  )
}

export default Logout