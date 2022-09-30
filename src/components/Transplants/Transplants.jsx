import React from 'react'
import s from './Transplants.module.css'

export const Transplants = (props) => {
  return (
    <div className={s.container}>
        <div className={s.title}>Количество пересадок</div>
        <label onClick={()=>{props.filterArr('all')}} className={s.select}>
            <input type="checkbox"  className={s.select__all}/>
            <span>Все</span>
        </label>
        <label onClick={()=>{props.filterArr(0)}} className={s.select}>
            <input type="checkbox" checked={props.isChecked} className={s.select__null}/>
            <span>Без пересадок</span>
        </label>
        <label onChange={()=>{props.filterArr(1)}} className={s.select}>
            <input type="checkbox" checked={props.isChecked} className={s.select__one}/>
            <span>1 пересадка</span>
        </label>
        <label onChange={()=>{props.filterArr(2)}} className={s.select}>
            <input type="checkbox" checked={props.isChecked} className={s.select__two}/>
            <span>2 пересадки</span>
        </label>
        <label onChange={()=>{props.filterArr(3)}} className={s.select}>
            <input type="checkbox" className={s.select__three}/>
            <span>3 пересадки</span>
        </label>
    </div>
  )
}
