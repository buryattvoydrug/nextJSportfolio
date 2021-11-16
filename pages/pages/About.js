import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Messages from '../components/Messages'
export default function About({data}) {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState(null)
   useEffect(() => {
    setItem(document.getElementById('hero'))
    // console.log(item)
  },[item])

  const handleScroll = () => {
    if(item && item.getBoundingClientRect().bottom<=300){
      setShow(true)
    }
    if(item && item.getBoundingClientRect().bottom>300){
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // console.log('rerAbout')
  
  let myRef = useRef()
    return (
    <>
      <section ref={myRef} id="about" className="about-page scroll-page">
      <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="trans"
                  unmountOnExit>
              <div className="about scroll-page">
                <h2 className="about__title title">Обо мне</h2>
                <Messages data={data}/>
              </div>
            </CSSTransition>
          </section>
    </>
  )
}

