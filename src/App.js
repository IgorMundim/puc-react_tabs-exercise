import {ConteinerOne} from './component/conteiner/ConteinerOne'
import {ConteinerTwo} from './component/conteiner/ConteinerTwo'
import {ConteinerThree} from './component/conteiner/ConteinerThree'
import {Tab} from './component/menu/Tab'

import { useEffect, useState } from 'react';

import './css/App.css';

function App() {
  
  const [container, setConteiner] = useState(1)

  useEffect(()=>{
    const conteiners = document.querySelectorAll('[data-conteiners="conteniner"]')
    const tabs = document.querySelectorAll('[data-tabs="tab"]')
    conteiners.forEach((item, index)=>{
        container == index +1 ? (item.style.display = 'block') && (tabs[index].classList.add('active')) : 
        (item.style.display ='none') && (tabs[index].classList.remove('active'))
    })
  })
  
  const handleOnToggleCompleted = (container) =>{
    setConteiner(container)
  }
  return (
    <>
      <div className="wrapper">
        <section className="component">      
          <ul className='tab-menu'>
            <Tab nameTab={"1"} onToggleClick={handleOnToggleCompleted}/>
            <Tab nameTab={"2"} onToggleClick={handleOnToggleCompleted}/>
            <Tab nameTab={"3"} onToggleClick={handleOnToggleCompleted}/>
          </ul>
        <ConteinerOne />
        <ConteinerTwo /> 
        <ConteinerThree />
        </section>
      </div>
    </>
  );
}

export default App;
