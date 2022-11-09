import React from 'react'
import s from './Content.module.css'

export const Content = (props) => {
  return (
    <div className={s.container}>
        <div className={s.price}>{props.price} Р</div>
        <div className={s.dataBlock}>
            <div className={s.company}>
                <div className={s.title}>Авиакомпания</div>
                <span className={s.content}>{props.company}</span>
            </div>
            <div className={s.time}>
                <div className={s.title}>В пути</div>
                <span className={s.content}>{props.time.hours}ч  {props.time.min}м</span>
            </div>
            <div className={s.transplants}>
                <div className={s.title}><span>{props.amount}</span> пересадк{props.amount == 1 ? 'а' : 'и'}</div>
                <span className={s.content}>{props.transplants}</span>
            </div>
        </div>
    </div>
  )
}
