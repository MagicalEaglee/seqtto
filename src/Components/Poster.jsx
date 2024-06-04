import React, { useEffect,useState } from 'react'
import "./Hero.css"
function Poster() {
  const[open,setOpen]=useState(false)
  useEffect(()=>{
    window.addEventListener("load",()=>{
      setOpen(true)
    })
  },[])
  return (
    <>
      <div className={open ? "poster" : "postern"}>
        <a href="https://www.instagram.com/seqtto/">
        <div className='poster-con'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/603/349/original/special-weekend-offer-sale-poster-template-discount-poster-30-off-sale-flyer-vector.jpg" alt="" />
        </div>
        
        </a>
        <button onClick={()=>setOpen(false)}>X</button>
      </div>
    
    </>
  )
}

export default Poster
