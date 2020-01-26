import React from 'react'
import useCustom from './ButtonData'

//To dispaly the counter button 
function Button() {
  const data = useCustom();
  return (
    <React.Fragment>
      <h3>{data.count}</h3>
      <a href="#top" className="btn btn-lg" onClick={data.handleClick}>
        <span className="glyphicon glyphicon-triangle-top"></span>
      </a>
    </React.Fragment>
  )
}

export default Button;
