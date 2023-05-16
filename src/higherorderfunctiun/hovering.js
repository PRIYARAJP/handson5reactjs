import React from 'react'
import Higher from './Higher'

const Hovering = (props) => {  
    console.log(props)
  return (
  <>  <div className='myhover'>
  <h1>{props.Value}</h1>
  <button onMouseOver={props.submit}>Hover</button>

</div></>
  )
}

export default Higher (Hovering)