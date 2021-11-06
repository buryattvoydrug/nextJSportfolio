import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Popup from './Popup'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Item({size,number,data}) {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState(null)

  useEffect(() => {
    setItem(document.getElementsByClassName('portfolio__title')[0])
  })

  let heightCard=430
  let heightTitle=800
  if(typeof window !== 'undefined' && window.innerWidth<768){
    heightCard=360
    heightTitle=550

  }
  
  const handleScroll = () => {
    if(item && item.getBoundingClientRect().bottom<=heightTitle-(heightCard*(number))){
      setShow(true)
    }
    if(item && item.getBoundingClientRect().bottom>heightTitle-(heightCard*number)){
      setShow(false)
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
  

  const [popup,setPopup]=useState(false)
  const togglePopup=()=>{
    setPopup(!popup);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }

  return (
    <>
    <CSSTransition
                  in={show}
                  timeout={1000}
                  classNames="port"
                  unmountOnExit>
      <div className={"item"+" size"+size}>
      <CSSTransition
                in={popup}
                timeout={1000}
                classNames="popup"
                unmountOnExit>
                <div className="popup-wrapper">
                  <div className="close" onClick={togglePopup}>
                    <img src="/images/CLOSE.png" alt=""/>
                  </div>
                  <Popup data={data}/>
                </div>
      </CSSTransition>
        {data && <div className="item-block">
          <span className="item__type">{data.type}</span>
          <h3 className="item__title">{data.title}</h3>
          <p className="item__text">
          {documentToReactComponents(data.description)}
          </p>
          <ul className="item-list">
          {documentToReactComponents(data.stack)}
          </ul>
          <button className="item__button" onClick={togglePopup}>Подробнее</button>
        </div>}
        {size===0 && data && 
        
          <img src={data.image1.fields.file.url} alt="" className="item__img" />
        }
        {size===1 && data &&
          <img src={data.image2.fields.file.url} alt="" className="item__img" />
        }
        {size===2 && data &&
          <img src={data.image3.fields.file.url} alt="" className="item__img" />
        }
      </div>
      </CSSTransition>
    </>
  )
}
