import React from 'react'
import Higher from './Higher'

const Clickingmove = (props) => {  
    console.log(props)
  return (
    <div className='myclick'>
        <h1>{props.Value}</h1>
        <button onClick={props.submit}>Click</button>
      
    </div>
  )
}

export default Higher (Clickingmove)