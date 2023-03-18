
import './index.css'
import { Transition } from './components'
import { FramerMenu } from './constants' 
import { useState } from 'react';

function App() {
  const [template, setTemplate] = useState(<Transition />)  

  const handleContentLoading = (e) => {    
    e.preventDefault()    
    setTemplate(`<${e.target.name}/>`)    
  }

  return (
    <div className="flex flex-row pl-0 pt-0 gap-1">
        <div className='basis-1/4 h-full pl-5 pt-5 pb-5 text-white'>
          <ul className='list-none'>
            {FramerMenu.map((menu) => (            
              <li key={menu.id} className="pt-2">
                <a href='#' className='text-white no-underline' name={menu.title} onClick={handleContentLoading}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='basis-2/4 h-full pl-[60px] pt-[200px] pb-5'>
          {template}
        </div>
    </div>    
  )
}

export default App
