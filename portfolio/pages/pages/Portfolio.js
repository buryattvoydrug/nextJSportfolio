import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Item from '../components/Item'

export default function Portfolio({data}) {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState(null)

  useEffect(() => {
    setItem(document.querySelector('.portfolio-page'))
  },[item])
  const handleScroll = () => {
    if(item && item.getBoundingClientRect().top<=0){
      setShow(true)
    }
    if(item && item.getBoundingClientRect().top>0){
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const k=[0,1,1,2,3,3,4,5,5,6,7,7,8,9,9,10,10,11,12,12]
  return (
    <>
      <section id="portfolio" className="portfolio-page">
          <div className="portfolio">
          <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="port"
                  unmountOnExit>
                    <div className="">
                      {typeof window !== 'undefined' && window.innerWidth<1280?
                        <h2 className="portfolio__title title">Порт фолио</h2>
                      :
                        <h2 className="portfolio__title title">Портфолио</h2>
                      }
                    </div>
                  </CSSTransition>
            <div className="portfolio-list">
              {/* {window.innerWidth<1280?
              <>
                <MobileItem size={'large'}/>
                <MobileItem size={'medium'}/>
                <MobileItem size={'small'}/>
                <MobileItem size={'large'}/>
                <MobileItem size={'medium'}/>
                <MobileItem size={'small'}/>

              </>: */}

              {data.map((item,index)=>
                (<Item key={index} data={Object.values(item)[2]} number={typeof window !== 'undefined' && window.innerWidth<1280?index:k[index]} size={index%3}/>)
              )}
                {/* <Item number={0} size={'large'}/>
                <Item number={1} size={'medium'}/>
                <Item number={typeof window !== 'undefined' && window.innerWidth<1280? 2: 1} size={'small'}/>
                <Item number={typeof window !== 'undefined' && window.innerWidth<1280? 3 : 2} size={'small'}/>
                <Item number={typeof window !== 'undefined' && window.innerWidth<1280? 4 : 2} size={'medium'}/>
                <Item number={typeof window !== 'undefined' && window.innerWidth<1280? 5 : 3} size={'large'}/> */}
            </div>
          </div>
      </section>
    </>
  )
}
