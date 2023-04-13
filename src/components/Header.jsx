import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialStateDarkMode = localStorage.getItem('theme') ==="dark" 
const Header = () => { 
  
  const refHeader = useRef(null)
  
  const [darkMode, setDarkMode] = useState(initialStateDarkMode)
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', "dark")
      //refHeader.current.classList.add('bg-gray-900')
    }else{
      document.documentElement.classList.remove('dark')
      //refHeader.current.classList.add('bg-gray-800')
      localStorage.setItem('theme', "light")
    }
  },[darkMode])
  
  return(
        <header className="container mx-auto px-4 pt-8" ref={refHeader}>
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button onClick={()=>setDarkMode(!darkMode)}>
            {
              darkMode ? <SunIcon/> : <MoonIcon/>
            }
          </button>
        </div>
      </header>
    )
 }
 export default Header;