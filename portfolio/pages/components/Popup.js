import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function Popup({ispopup,data}) {
  console.log(data)
    return (
    <>
         <div className="popup">
          <div className="todo-block">
            <div className="todo">
              <h3 className="todo__title">Задача</h3>
              <ul className="todo-list">
                {documentToReactComponents(data.todolist)}
              </ul>
            </div>
            <img src="/images/todo.png" alt="" className="todo__image" />
          </div>
          <div className="block first-block">
            <img src={data.designImg.fields.file.url} alt="" className="design__image" />
            <div className="first">
              <div className="title">
                <img src="/images/1.png" alt="" className="title__img" />
                <h2 className="block__title">Дизайн</h2>
              </div>
              <p className="block__text">
              {documentToReactComponents(data.design)}
              </p>
              <div className="link">
                <img src="/images/l-behance.svg" alt="" />
                <p className="link__text">
                Более подробно о дизайне этой работы, а также <strong>с другими кейсами</strong> по <strong>веб-дизайну</strong> можно ознакомиться на <strong>Behance →</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="todo-block todo-checked">
            <div className="todo">
              <ul className="todo-list">
              {documentToReactComponents(data.designDone)}
              </ul>
            </div>
          </div>

          <div className="block left-block">
            <div className="">
              <div className="title">
                <img src="/images/2.png" alt="" className="title__img" />
                <h2 className="block__title">Backend</h2>
              </div>
              <p className="block__text">
              {documentToReactComponents(data.backend)}
              </p>
            </div>
          </div>
          <div className="block right-block">
            <div className="">
              <div className="link">
                <img src="/images/l-github.svg" alt="" />
                <p className="link__text">
                <strong>Код</strong> проекта, а также другие <strong>мои работы</strong> можно найти на <strong>GitHub →</strong>
                </p>
              </div>
              <img src="/images/backend.png" alt="" className="block__img" />
            </div>
          </div>

          <div className="todo-block todo-checked">
            <div className="todo">
              <ul className="todo-list">
                {documentToReactComponents(data.backendDone)}
              </ul>
            </div>
          </div>

          <div className="block right-block">
            <div className="">
              <div className="title">
                <img src="/images/3.png" alt="" className="title__img" />
                <h2 className="block__title">Frontend</h2>
              </div>
              <p className="block__text">
              {documentToReactComponents(data.frontend)}
              </p>
            </div>
          </div>

          <div className="todo-block todo-checked">
            <div className="todo">
              <ul className="todo-list">
              {documentToReactComponents(data.frontendDone)}
              </ul>
            </div>
          </div>

          <div className="todo-block">
            <div className="todo">
              <h3 className="todo__title">
              {documentToReactComponents(data.result)}
              </h3>
            </div>
            <img src="/images/todo2.png" alt="" className="todo__image" />
          </div>

        </div>

    </>
  )
}

export default Popup
