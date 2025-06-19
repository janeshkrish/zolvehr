import React, { useEffect, useState } from 'react'
import './TopBanner.css'
import logo_img from '../assets/logo.png'

export const TopBanner = () => {
    const [count,setCount] = useState(0);
    const finalCount = 111488;
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prev)=>{
                if (prev < finalCount) return prev + 551;
                clearInterval(interval)
                return finalCount
            })
        },7)
        return ()=>clearInterval(interval)
    },[])
  return (
    <div className='top-banner'>
            <img src={logo_img} alt="logo" className="logo" />
            <span className="counter-text">{count.toLocaleString()} sign ups to date. You next?</span> 
    </div>
  )
}
