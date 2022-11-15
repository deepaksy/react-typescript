import React from 'react'

const FRInput = React.forwardRef((props,ref:any) =>{
  return(
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
})

export default FRInput