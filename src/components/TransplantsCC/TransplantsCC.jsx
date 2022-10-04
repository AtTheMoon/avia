import React from 'react'
import s from './TransplantsCC.module.css'

class TransplantsCC extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={s.container}>
        <div className={s.title}>Количество пересадок</div>
        {this.props.isSelect.map(element => {
            return(
             <label onChange={()=>{this.props.filterArr(element.id)}} className={s.select}>
             <input type="checkbox" checked={element.isChecked} name='select'/>
             <span>{element.caps}</span>
             </label>)
        })}
    </div>
    )
  }
}

// export const Transplants = (props) => {
//   return (
//     <div className={s.container}>
//         <div className={s.title}>Количество пересадок</div>
//         {props.isSelect.map(element => {
//             return(
//              <label onChange={()=>{props.filterArr(element.id)}} className={s.select}>
//              <input type="checkbox" checked={element.isChecked} name='select'/>
//              <span>{element.caps}</span>
//              </label>)
//         })}
//     </div>
//   )
// }

export {TransplantsCC}