import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Messages({data}) {
  const [show, setShow] = useState(false)
  setTimeout(()=>setShow(true),1500)
  const [show2, setShow2] = useState(false)
  setTimeout(()=>setShow2(true),4000)
  const [write, setWrite] = useState(true)
  setTimeout(()=>setWrite(false),4000)
  console.log(data)
  return (
    <>
    
                          <div className="about-block">
                            <span className="message__title">Игорь веб-разработчик</span>
                            <div className="message">{documentToReactComponents(data.fields.message1)}</div>
                            <CSSTransition
                              in={show}
                              timeout={1000}
                              classNames="port"
                              unmountOnExit>
                                <div className="message">{documentToReactComponents(data.fields.message2)}</div>
                              </CSSTransition>
                            <CSSTransition
                              in={show2}
                              timeout={1000}
                              classNames="port"
                              unmountOnExit>
                                <div className="message"><span>Мой <strong>стек</strong> технологий:</span>
                                  {documentToReactComponents(data.fields.message3)}
                                </div>
                            </CSSTransition>
                            <CSSTransition
                              in={write}
                              timeout={1000}
                              classNames="popup"
                              unmountOnExit>
                            <div className="write">
                              <img src="/images/Печатание.gif" alt=""/>
                            </div>
                            </CSSTransition>
                          </div>
    
    </>
  )
}

