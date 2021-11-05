import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Photo from '../pages/Photo'
import Nav from './Nav'

import dynamic from "next/dynamic";


export default function Widgets() {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)
  const [item, setItem] = useState(null)
  const [portfolio, setPortfolio] = useState(null)

  useEffect(() => {
    setItem(document.querySelector('.contacts-page'))
    // console.log(item)
  },[item])
  useEffect(() => {
    setPortfolio(document.querySelector('.portfolio-list'))
    // console.log(portfolio)
  },[portfolio])
  
  const handleScroll = () => {
    if(item && item.getBoundingClientRect().bottom-document.documentElement.clientHeight<100){
          setShow(false)
        }
        if(item && item.getBoundingClientRect().bottom-document.documentElement.clientHeight>=100){
          setShow(true)
        }
        if(portfolio && portfolio.getBoundingClientRect().top<=300){
          setShow2(false)
        }
        if(portfolio && (portfolio.getBoundingClientRect().top>300) ){
          setShow2(true)
        }
        if(portfolio && (portfolio.getBoundingClientRect().bottom<0) ){
          setShow2(true)
        }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
  return (
    <>
      {typeof window !== 'undefined' && window.innerWidth>=1280 &&
          <>
          <CSSTransition
                  in={show2}
                  timeout={1000}
                  classNames="hero"
                  unmountOnExit>
             <Photo/>
          </CSSTransition>
          <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="popup"
                  unmountOnExit>
          <div className="to-scroll">
            <div className="container to-scroll">
              <span className="to-scroll__text title">листайте вниз</span>
            </div>
          </div>
        </CSSTransition>
          </>
          }
          <CSSTransition
                  in={show2}
                  timeout={1000}
                  classNames="popup"
                  unmountOnExit>
          <Nav/>
        </CSSTransition>
        
    </>
  )
}
