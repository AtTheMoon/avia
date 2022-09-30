import { useState } from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import { Main } from './components/Main/Main';
import { Tickets } from './components/Tickets/Tickets';
import { Transplants } from './components/Transplants/Transplants';
import logo from './images/Logo.png'


  const data = [
    {price: '13 400 Р', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG'], isChecked: false},
    {price: '13 400 Р', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB'], isChecked: false},
    {price: '13 400 Р', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG'], isChecked: false},
    {price: '13 400 Р', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB', 'POP'], isChecked: false},
    {price: '13 400 Р', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB'], isChecked: false},
    {price: '13 400 Р', company: 'Air Astana', time: '11ч 20м', transplants: ['HKG', 'JNB', 'POP'], isChecked: false}
  ]


function App() {

  const [content, setContent] = useState(data)

  const filterArr=(count)=>{
    let newArr = data.filter(elem=>{
      if(elem.transplants.length == count ){
        console.log('1')
        return elem
      }
      else if(elem.transplants.length == count ){
        console.log('2')
        return elem
      }
      else if(elem.transplants.length == count ){
        console.log('3')
        return elem
      }
      else if(count === 'all'){
        return elem
      }
    })
    setContent(newArr)
    console.log(content)
  }

  return (
    <div className="App">
      <div className="avia__logo"><img src={logo} className='avia__logo' alt="" /></div>

          <Main
          transplantsChild={<Transplants filterArr={filterArr} />}
          ticketsChild={<Tickets />}
          >   {content.map(obj=>{
            return(
              <Content price={obj.price} isChecked={obj.isChecked} company={obj.company} time={obj.time} transplants={obj.transplants.map(place=>{return(place)}).join(', ')}/>
            )
          })}
          </Main>
    </div>
  );
}

export default App;
