import React from 'react'
import s from './Transplants.module.css'

export const Transplants = (props) => {
  return (
    <div className={s.container}>
        <div className={s.title}>Количество пересадок</div>
        {props.isSelect.map(element => {
            return(
             <label onChange={()=>{props.filterArr(element.id)}} className={s.select}>
             <input type="checkbox" checked={element.isChecked} name='select'/>
             <span>{element.caps}</span>
             </label>)
        })}
    </div>
  )
}
