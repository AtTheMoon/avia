import React from 'react'
import s from './Transplants.module.css'

export const Transplants = (props) => {
  return (
    <div className={s.container}>
        <div className={s.title}>Количество пересадок</div>
        {props.checkboxArr.map(element => {
            return(
             <label key={element.id} className={s.select}>
             <input type="checkbox" checked={element.isChecked}  onChange={()=>{props.filterArr(element.id)}}/>
             <span>{element.caps}</span>
             </label>)
        })}
    </div>
  )
}