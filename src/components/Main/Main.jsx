import React from 'react'
import s from './Main.module.css'

export const Main = (props) => {
  return (
    <div className={s.container}>
        <div className={s.navBlock}>
            {props.transplantsChild}
            {props.ticketsChild}
        </div>
        <div className={s.contentBlock}>
          <span className={s.hidden}>Билеты не найдены</span>
            {props.children}
        </div>
    </div>
  )
}
