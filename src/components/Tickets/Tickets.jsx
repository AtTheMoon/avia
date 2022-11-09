import React from 'react'
import s from './Tickets.module.css'

export const Tickets = (props) => {
  return (
    <div className={s.container}>
        <div className={s.title}>Сортировать билеты</div>
        {props.checkboxArr.map(element => {
            return(
             <label key={element.id} className={s.select}>
             <input type="radio" name='tickets' onChange={()=>{props.filterArr(element.id)}}/>
             <span>{element.caps}</span>
             </label>)
        })}
    </div>
  )
}
