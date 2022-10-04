import React from 'react'
import s from './TicketsCC.module.css'


class TicketsCC extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={s.container}>
                <div className={s.title}>Сортировать билеты</div>
                <label className={s.select}>
                    <input type="radio" name='select' className={s.select__all}/>
                    <div className={s.select__style}><img src={this.props.checkIcon} alt="" /></div>
                    <span>Все</span>
                </label>
                <label className={s.select}>
                    <input type="radio" name='select' className={s.select__priceUp}/>
                    <div className={s.select__style}><img src={this.props.checkIcon} alt="" /></div>
                    <span>По цене (возраст.)</span>
                </label>
                <label className={s.select}>
                    <input type="radio" name='select' className={s.select__priceDown}/>
                    <div className={s.select__style}><img src={this.props.checkIcon} alt="" /></div>
                    <span>По цене (убыв.)</span>
                </label>
                <label className={s.select}>
                    <input type="radio" name='select' className={s.select__timeUp}/>
                    <div className={s.select__style}><img src={this.props.checkIcon} alt="" /></div>
                    <span>Время в полете (возраст.)</span>
                </label>
                <label className={s.select}>
                    <input type="radio" name='select' className={s.select__timeDown}/>
                    <div className={s.select__style}><img src={this.props.checkIcon} alt="" /></div>
                    <span>Время в полете (убыв.)</span>
                </label>
        </div>
        )
    }
}



// export const Tickets = (props) => {
//   return (
//     <div className={s.container}>
//          <div className={s.title}>Сортировать билеты</div>
//          <label className={s.select}>
//             <input type="radio" name='select' className={s.select__all}/>
//             <div className={s.select__style}><img src={props.checkIcon} alt="" /></div>
//             <span>Все</span>
//         </label>
//         <label className={s.select}>
//             <input type="radio" name='select' className={s.select__priceUp}/>
//             <div className={s.select__style}><img src={props.checkIcon} alt="" /></div>
//             <span>По цене (возраст.)</span>
//         </label>
//         <label className={s.select}>
//             <input type="radio" name='select' className={s.select__priceDown}/>
//             <div className={s.select__style}><img src={props.checkIcon} alt="" /></div>
//             <span>По цене (убыв.)</span>
//         </label>
//         <label className={s.select}>
//             <input type="radio" name='select' className={s.select__timeUp}/>
//             <div className={s.select__style}><img src={props.checkIcon} alt="" /></div>
//             <span>Время в полете (возраст.)</span>
//         </label>
//         <label className={s.select}>
//             <input type="radio" name='select' className={s.select__timeDown}/>
//             <div className={s.select__style}><img src={props.checkIcon} alt="" /></div>
//             <span>Время в полете (убыв.)</span>
//         </label>
//     </div>
//   )
// }

export {TicketsCC}