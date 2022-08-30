import React from 'react'

export default function Input(props) {
  return <>
  <label htmlFor={props.htmlFor} className={props.classNamelabel}>{props.value}</label>
  <input type={props.type} onChange={props.onChange} placeholder={props.placeholder} name={props.name} id={props.id} className={props.className} /></>
}
