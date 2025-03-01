/**
 * ProductRow component
 * @param {liste} liste
 * @returns {JSX}
 */
import React from 'react'

export default function ProductRow({liste}) {
  const color = liste.stocked ? 'white' : 'red';

  return (
    <tr>
      <td style={{color:`${color}`}}>{liste.name}</td>
      <td style={{color:`${color}`}}>{liste.price}</td>
    </tr>
  )
}
