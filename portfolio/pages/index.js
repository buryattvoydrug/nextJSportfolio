import Head from 'next/head'
import Hero from "./pages/Hero";

import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Widgets from "./components/Widgets";
import client from '../contentful'

export default function Home({about,contacts,portfolio}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/ball.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Радимов Игорь | веб-разработка"
        />
        <link rel="apple-touch-icon" href="/ball.png" />
        <title>Веб-разработка</title>
      </Head>

      <main>
      <div className="global-wrapper">
      
            <div className="ball first__ball"></div>
            <div className="ball second__ball"></div>
            <div className="ball third__ball"></div>
            <div className="ball fourth__ball"></div>
            <Widgets/>

            <div className="container scroll-container">
            
                <Hero/>
                <About data={about}/>
                <Portfolio data={portfolio.items}/>
                <Contacts data={contacts}/>
            </div>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const about= await client.getEntries({
    content_type:'mainPage',
    limit:1
  })
  const contacts= await client.getEntries({
    content_type:'links',
    limit:1
  })
  const portfolio= await client.getEntries({
    content_type:'portfolio',
    limit:20
  })

  const [aboutPage]=about.items;
  const [links]=contacts.items;

  return { props: { 
    about:aboutPage,
    contacts:links,
    portfolio
    }
  }
}