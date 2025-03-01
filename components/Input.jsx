import React from 'react'

export default function Input({onchange, value, placeholder}) {
  return (
    <div className='Input' style={{width: '100%',border: '1px solid black', padding: '10px'}}>
        <input 
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            style={{width: '300px', height: '30px',outline:'none'}}
        />
    </div>
  )
}
