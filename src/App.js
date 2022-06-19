import {React, useState,useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/modules/moduleRouter/Login'
import Password from './components/modules/moduleRouter/Password'


export default function App() {
   const [res,setres] = useState(false);
   useEffect(()=>{
      
      window.addEventListener('resize',function(){
         if(window.innerWidth <= 600){
            setres(true)
         }
          if(window.innerWidth >= 600){
            setres(false)
         }
      }
      )   
   },[res])

 return (
    <div className="wrapper">
       <Header />
       <Routes>
         {
          res  ?  <>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/password' element={<Password/>}/>
                  </> 
          :
                  <>
                  <Route path='/password' element={<Password/>}/>
                  <Route path='/login' element={<Login/>}/>
                  </> 
         }
       </Routes>
    </div>
  )
}

