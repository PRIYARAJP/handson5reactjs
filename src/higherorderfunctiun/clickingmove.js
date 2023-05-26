import React from 'react'
import Higher from './Higher'

const Clickingmove = (props) => {  
    console.log(props)
  return (
    <><span><div >
    <h1>{props.Value}</h1>
    <button onClick={props.submit}>Click</button>
  
</div></span></>
  )
}

export default Higher (Clickingmove)