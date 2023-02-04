import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import Project from '../components/Project'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white overflow-scroll overflow-x-auto snap-y snap-mandatory z-0 scrollbar scrollbar-thumb-yellow-400 select-none">
      <Head>
        <title>anish-portfolio</title>
        <meta name="description" content="anish-protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='loader' className='flex flex-col items-center justify-center z-50 bg-[rgb(36,36,36)] h-screen'>
        <div className="w-12 h-12 rounded-full animate-spin
                    border-y border-solid border-yellow-500 border-t-transparent shadow-md"></div>
      </div>


      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="About" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="Experience" className="snap-center">
        <Experience />
      </section>

      {/* Skill */}
      <section id="Skills" className="snap-center">
        <Skill />
      </section>

      <section id="Projects" className="snap-center">
        <Project />
      </section>

    </div>
  )
}
