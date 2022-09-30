import React from 'react'
import s from './Tickets.module.css'

export const Tickets = () => {
  return (
    <div className={s.container}>
         <div className={s.title}>Сортировать билеты</div>
         <label className={s.select}>
            <input type="checkbox" className={s.select__all}/>
            <span>Все</span>
        </label>
        <label className={s.select}>
            <input type="checkbox" className={s.select__priceUp}/>
            <span>По цене (возраст.)</span>
        </label>
        <label className={s.select}>
            <input type="checkbox" className={s.select__priceDown}/>
            <span>По цене (убыв.)</span>
        </label>
        <label className={s.select}>
            <input type="checkbox" className={s.select__timeUp}/>
            <span>Время в полете (возраст.)</span>
        </label>
        <label className={s.select}>
            <input type="checkbox" className={s.select__timeDown}/>
            <span>Время в полете (убыв.)</span>
        </label>
    </div>
  )
}
