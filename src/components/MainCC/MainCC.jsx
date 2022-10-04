import React from 'react'
import s from './MainCC.module.css'

class MainCC extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
       <div className={s.container}>
        <div className={s.navBlock}>
            {this.props.transplantsChild}
            {this.props.ticketsChild}
        </div>
        <div className={s.contentBlock}>
          <span className={s.hidden}>Билеты не найдены</span>
            {this.props.children}
        </div>
    </div>
    )
  }
}

// export const Main = (props) => {
//   return (
//     <div className={s.container}>
//         <div className={s.navBlock}>
//             {props.transplantsChild}
//             {props.ticketsChild}
//         </div>
//         <div className={s.contentBlock}>
//           <span className={s.hidden}>Билеты не найдены</span>
//             {props.children}
//         </div>
//     </div>
//   )
// }

export {MainCC}