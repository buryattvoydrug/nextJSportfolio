import React, { useEffect, useState } from 'react'

export default function PortfolioTitle() {
  const [width,setWidth]=useState(0)
  const handleResize = () => {
    setWidth(document.body.getBoundingClientRect().width)
      console.log(document.body.getBoundingClientRect().width)      
  }
  useEffect(()=> {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      {typeof window !== 'undefined' && window.innerWidth<1280?
                        <h2 className="portfolio__title title">Порт<br/>фолио</h2>
                      :
                        <h2 className="portfolio__title title">Портфолио</h2>
                      }
    </>
  )
}
