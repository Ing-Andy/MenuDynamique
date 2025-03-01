import React from 'react'

export default function Check({onchange, value, label , id}) {
  return (
    <div className='Check' style={{width: '300px', height: '30px',paddingLeft: '50px'}}>
        <input 
            type="checkbox"
            id={id}
            className='checkBox'
            value={value}
            onChange={onchange}
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}
