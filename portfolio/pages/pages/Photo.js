import React from 'react'

export default function Photo() {
  return (
    <>
      <section className="main-photo">
        {window.innerWidth<1280 ?
          <img src="images/herom.webp" alt="Игорь Радимов" />
        :
        <div className="container">
          <img src="images/hero.webp" alt="Игорь Радимов" />
        </div>}
      </section>
    </>
  )
}
