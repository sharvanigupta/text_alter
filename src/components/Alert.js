import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alert &&            // so that null value at initial does not show error  
      <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
        <strong>{props.alert.type}</strong> <strong> : {props.alert.msg}</strong> 
      </div>}
    </div>
   
  )
}
