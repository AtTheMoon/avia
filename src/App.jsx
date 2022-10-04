import { useState } from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import { Main } from './components/Main/Main';
import { Tickets } from './components/Tickets/Tickets';
import { Transplants } from './components/Transplants/Transplants';
import logo from './images/Logo.png'
import checkIcon from './images/check.png'


  const data = [
    {price: '13 400', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG'], isChecked: false},
    {price: '12 400', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB'], isChecked: false},
    {price: '11 400', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG'], isChecked: false},
    {price: '10 400', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB', 'POP'], isChecked: false},
    {price: '12 400', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB'], isChecked: false},
    {price: '11 400', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB', 'POP'], isChecked: false}
  ]


function App() {

  const [content, setContent] = useState(data)
  const [isSelect, setIsSelect] = useState([
    {id: 'all', caps: 'Все', isChecked: false},
    {id: 'none', caps: 'Без пересадок', isChecked: false},
    {id: '1', caps: '1 пересадка', isChecked: false},
    {id: '2', caps: '2 пересадки', isChecked: false},
    {id: '3', caps: '3 пересадки', isChecked: false}
  ])

  const checkBool = (id)=>{
    let checkArr = isSelect.map(obj=>{
      if(id == obj.id || id == obj.id || id == obj.id){
        return {...obj, isChecked: !obj.isChecked}
      }
      return obj
    })
    setIsSelect(checkArr)
  }

  const filterArr=(count)=>{
    let filteredArr = []
    let newArr = data.filter(elem=>{
      if(count == elem.transplants.length){
        checkBool(count)
        filteredArr.push(elem)
        return {...filteredArr, elem}
      }
      else if(count === 'all'){
        return elem
      }
    })
    setContent(newArr)
    console.log(content)
  }

  // const filterTickets=(id)=>{
  //   const ticketsArr = data.filter(elem=>{
  //     // if(id == 'priceUp'){
  //       elem.price.sort(function(a, b) {
  //         return (a - b)
  //       })
  //       return elem
  //     // }
  //   })
  //   console.log(ticketsArr)
  // }

  // filterTickets()

  return (
    <div className="App">
      <div className="avia__logo"><img src={logo} className='avia__logo' alt="" /></div>

          <Main
          transplantsChild={<Transplants checkIcon={checkIcon} isSelect={isSelect} filterArr={filterArr} />}
          ticketsChild={<Tickets checkIcon={checkIcon} />}
          >   {content.map(obj=>{
            return(
              <Content price={obj.price} amount={obj.transplants.length} isChecked={obj.isChecked} company={obj.company} time={obj.time} transplants={obj.transplants.map(place=>{return(place)}).join(', ')}/>
            )
          })}
          </Main>
    </div>
  );
}

export default App;
