import React from 'react'
import s from './ContentCC.module.css'


class ContentCC extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={s.container}>
            <div className={s.price}>{this.props.price} Р</div>
            <div className={s.dataBlock}>
                <div className={s.company}>
                    <div className={s.title}>Авиакомпания</div>
                    <span className={s.content}>{this.props.company}</span>
                </div>
                <div className={s.time}>
                    <div className={s.title}>В пути</div>
                    <span className={s.content}>{this.props.time}</span>
                </div>
                <div className={s.transplants}>
                    <div className={s.title}><span>{this.props.amount}</span> пересадк{this.props.amount == 1 ? 'а' : 'и'}</div>
                    <span className={s.content}>{this.props.transplants}</span>
                </div>
            </div>
        </div> 
        )
    }
}



// export const Content = (props) => {
//   return (
//     <div className={s.container}>
//         <div className={s.price}>{props.price} Р</div>
//         <div className={s.dataBlock}>
//             <div className={s.company}>
//                 <div className={s.title}>Авиакомпания</div>
//                 <span className={s.content}>{props.company}</span>
//             </div>
//             <div className={s.time}>
//                 <div className={s.title}>В пути</div>
//                 <span className={s.content}>{props.time}</span>
//             </div>
//             <div className={s.transplants}>
//                 <div className={s.title}><span>{props.amount}</span> пересадк{props.amount == 1 ? 'а' : 'и'}</div>
//                 <span className={s.content}>{props.transplants}</span>
//             </div>
//         </div>
//     </div>
//   )
// }

export {ContentCC}