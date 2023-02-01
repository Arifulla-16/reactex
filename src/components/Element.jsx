import React from 'react'



function Element(props) {
  return (
    <div className='element' onClick={()=>props.handleClick(props.name)}>
    {props.name}
    </div>
  )
}

export default Element;