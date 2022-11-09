import  React, { useEffect, useState } from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import { Main } from './components/Main/Main';
import { Tickets } from './components/Tickets/Tickets';
import { Transplants } from './components/Transplants/Transplants';
import logo from './images/Logo.png'
import checkIcon from './images/check.png'
import { render } from '@testing-library/react';
import { MainCC } from './components/MainCC/MainCC';
import { ContentCC } from './components/ContentCC/ContentCC';
import { TicketsCC } from './components/TicketsCC/TicketsCC';
import { TransplantsCC } from './components/TransplantsCC/TransplantsCC';


  const data = [
    {price: '13 400', company: 'Air Astana', time: {hours: '11', min: '20'}, transplants: ['HKG']},
    {price: '12 400', company: 'Air Astana', time: {hours: '12', min: '20'}, transplants: ['HKG', 'JNB']},
    {price: '11 400', company: 'Air Astana', time: {hours: '13', min: '20'}, transplants: ['HKG']},
    {price: '10 400', company: 'Air Astana', time: {hours: '10', min: '20'}, transplants: ['HKG', 'JNB', 'POP']},
    {price: '12 400', company: 'Air Astana', time: {hours: '9', min: '20'}, transplants: ['HKG', 'JNB']},
    {price: '11 400', company: 'Air Astana', time: {hours: '11', min: '20'}, transplants: ['HKG', 'JNB', 'POP']}
  ]

  let byOne = []
  let byTwo = []
  let byThree = []
  let noneArr = []

  data.filter(obj=>{
    if(obj.transplants.length == 1){
      byOne.push(obj)
    }
    else if(obj.transplants.length == 2){
      byTwo.push(obj)
    }
    else if(obj.transplants.length == 3){
      byThree.push(obj)
    }
  })

  console.log(byOne)
  console.log(byTwo)
  console.log(byThree)

  const checkboxes = [
    {id: 'all', caps: 'Все', isChecked: false},
    {id: 'none', caps: 'Без пересадок', isChecked: false},
    {id: 1, caps: '1 пересадка', isChecked: false},
    {id: 2, caps: '2 пересадки', isChecked: false},
    {id: 3, caps: '3 пересадки', isChecked: false}
  ]

  const ticketsCheckboxes = [
    {id: 'all', caps: 'Все', isChecked: false},
    {id: 'pUp', caps: 'По цене (возраст.)', isChecked: false},
    {id: 'pDown', caps: 'По цене (убыв.)', isChecked: false},
    {id: 'tUp', caps: 'Время в полете (возраст.)', isChecked: false},
    {id: 'tDown', caps: 'Время в полете (убыв.)', isChecked: false}
  ]

  // class AppCC extends React.Component{
  //   constructor(props){
  //     super(props)
  //     this.state = {
  //       content: data,
  //       isSelect: checkboxes
  //     }
  //   }

  //       checkBool = (id)=>{
  //       let checkArr = this.state.isSelect.map(obj=>{
  //         if(id == obj.id || id == obj.id || id == obj.id){
  //           return {...obj, isChecked: !obj.isChecked}
  //         }
  //         return obj
  //       })
  //       this.setState({isSelect: checkArr})
  //     }
    
  //     filterArr=(count)=>{
  //       let filteredArr = []
  //       let newArr = data.filter(elem=>{
  //         if(count == elem.transplants.length){
  //           this.checkBool(count)
  //           filteredArr.push(elem)
  //           return {...filteredArr, elem}
  //         }
  //         else if(count === 'all'){
  //           return elem
  //         }
  //       })
  //       this.setState({content: newArr})
  //     }

  //     render(){
  //       return(
  //         <div className="App">
  //           <div className="avia__logo"><img src={logo} className='avia__logo' alt="" /></div>

  //           <MainCC
  //           transplantsChild={<TransplantsCC checkIcon={checkIcon} isSelect={this.state.isSelect} filterArr={this.filterArr} />}
  //           ticketsChild={<TicketsCC checkIcon={checkIcon} />}
  //           >   {this.state.content.map(obj=>{
  //             return(
  //               <ContentCC price={obj.price} amount={obj.transplants.length} isChecked={obj.isChecked} company={obj.company} time={obj.time} transplants={obj.transplants.map(place=>{return(place)}).join(', ')}/>
  //             )
  //           })}
  //           </MainCC>
  //         </div>
  //       )
  //     }
  // }


function App() {

  const [content, setContent] = useState(data)
  const [chboxes, setChboxes] = useState(checkboxes)
  const [tickets, setTickets] = useState(ticketsCheckboxes)

  useEffect(()=>{

    if(chboxes[2].isChecked === true && chboxes[3].isChecked === true && !chboxes[4].isChecked && !chboxes[0].isChecked){
      setContent([...byOne, ...byTwo])
    }
    else if(chboxes[2].isChecked === true && chboxes[4].isChecked === true && !chboxes[3].isChecked && !chboxes[0].isChecked){
      setContent([...byOne, ...byThree])
    }
    else if(chboxes[3].isChecked === true && chboxes[4].isChecked === true && !chboxes[2].isChecked && !chboxes[0].isChecked){
      setContent([...byTwo, ...byThree])
    }
    else if(chboxes[3].isChecked === true && chboxes[4].isChecked === true && chboxes[2].isChecked === true){
      setContent([...byOne, ...byTwo, ...byThree])
    }
    else if(chboxes[3].isChecked === true && !chboxes[0].isChecked && !chboxes[2].isChecked && !chboxes[4].isChecked){
      setContent(byTwo)
    }
    else if(chboxes[2].isChecked === true && !chboxes[0].isChecked && !chboxes[3].isChecked && !chboxes[4].isChecked){
      setContent(byOne)
    }
    else if(chboxes[4].isChecked === true && !chboxes[0].isChecked && !chboxes[2].isChecked && !chboxes[3].isChecked){
      setContent(byThree)
    }
    else if(chboxes[0].isChecked === true){
        setContent(data)
        let newChbxArr = chboxes.map(chbx=>{
          return {...chbx, isChecked: true}
        })
        setChboxes(newChbxArr)
      }
    else if(chboxes[1].isChecked === true){
      setContent(noneArr)
    }else{
      setContent(data)
    }
  }, [chboxes])

  // useEffect(()=>{
  //   if(tickets[0].isChecked === true){
  //     console.log('all')
  //     // setContent(data)
  //     // let newChbxArr = tickets.map(chbx=>{
  //     //   return {...chbx, isChecked: true}
  //     // })
  //     // setTickets(newChbxArr)
  //   }
  //   else if(tickets[1].isChecked === true){
  //     console.log('p')
  //     let newChbxArr = tickets.map(chbx=>{
  //       if(chbx.id === 'pUp' ){
  //         return {...chbx, isChecked: true}
  //       }
  //       return {...chbx, isChecked: false}
  //     })
  //     setTickets(newChbxArr)
  //     console.log(tickets)
  //   }
  //   else if(tickets[2].isChecked === true){
  //     console.log('pd')
  //     let newChbxArr = tickets.map(chbx=>{
  //       // if(chbx.id === 'pDown'){
  //       //   return {...chbx, isChecked: true}
  //       // }
  //       return {...chbx, isChecked: false}
  //     })
  //     setTickets(newChbxArr)
  //     tickets[2].isChecked = true
  //   }
  //   else if(tickets[3].isChecked === true){
  //     console.log('t')
  //   }
  //   else if(tickets[4].isChecked === true){
  //     console.log('td')
  //   }
  // }, [tickets])

  // const filterArr=(count)=>{
  //   let newArr = data.filter(elem=>{
  //     if(count == elem.transplants.length){
  //       return [...content, elem]
  //     }
  //     else if(count === 'all'){
  //       return elem
  //     }
  //   })
  //   setContent(newArr) 

  //     const checkedArr = chboxes.map(
  //         chbx => {
  //             if(chbx.id === count){
  //                 return {...chbx, isChecked: !chbx.isChecked}
  //             }
  //             return chbx
  //         }
  //     )
  //     setChboxes(checkedArr)
  // }

  // let newArr = data.filter(elem=>{
  //   if(count == elem.transplants.length){
  //     return [...content, elem]
  //   }
  //   else if(count === 'all'){
  //     return elem
  //   }
  // })
  // setContent(newArr)

  const filterArr=(count)=>{ 
    const checkedArr = chboxes.map(
        chbx => {
            if(chbx.id === count){
                return {...chbx, isChecked: !chbx.isChecked}
            }
            return chbx
        }
    )
    setChboxes(checkedArr)
}

const filterTicketsArr=(arg)=>{ 
  content.sort((a, b) => {
    if(arg === 'tUp'){
      return((a.time.hours * 60 + a.time.min) - (b.time.hours * 60 + b.time.min))
    }
    else if(arg === 'tDown'){
      return((b.time.hours * 60 + b.time.min) - (a.time.hours * 60 + a.time.min))
    }
    else if(arg === 'pUp'){
    return(a.price.replace(/ +/g, '') - b.price.replace(/ +/g, ''))
    }
    else if(arg === 'pDown'){
      return(b.price.replace(/ +/g, '') - a.price.replace(/ +/g, ''))
    }
})
// console.log(ticketsArr)
// setContent(content)
}

  const filterTickets = (arg) =>{
    console.log('hi')
      let ticketsArr = content.sort((a, b) => {
            if(arg === 'tUp'){
              return((a.time.hours * 60 + a.time.min) - (b.time.hours * 60 + b.time.min))
            }
            else if(arg === 'tDown'){
              return((b.time.hours * 60 + b.time.min) - (a.time.hours * 60 + a.time.min))
            }
            else if(arg === 'pUp'){
            return(a.price.replace(/ +/g, '') - b.price.replace(/ +/g, ''))
            }
            else if(arg === 'pDown'){
              return(b.price.replace(/ +/g, '') - a.price.replace(/ +/g, ''))
            }
    })
      console.log(ticketsArr)
      setContent(ticketsArr)
  }



  return (
    <div className="App">
      <div className="avia__logo"><img src={logo} className='avia__logo' alt="" /></div>

          <Main
          transplantsChild={<Transplants checkIcon={checkIcon} checkboxArr={chboxes} filterArr={filterArr} />}
          ticketsChild={<Tickets filterArr={filterTicketsArr} checkboxArr={tickets} checkIcon={checkIcon} />}
          >   {content.map((obj, ind)=>{
            return(
              <Content key={ind} price={obj.price} amount={obj.transplants.length} company={obj.company} time={obj.time} transplants={obj.transplants.map(place=>{return(place)}).join(', ')}/>
            )
          })}
          </Main>
    </div>
  );
}

export default App;

// export {AppCC}