import React from "react"
import '../styles/bulma.min.css'
import githubLogoImg from '../images/github-logo.png'
import Menu from './menu.js'
import Footer from './footer.js'

export default function Layout({ children, showNavbar }) {
  return (

    <main className="main" style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {showNavbar && <Menu />}
      <div className="container is-max-desktop" style={{ marginTop: 64 }}>
        <section className='section'>
        {children}
        </section>
      </div>
      <Footer />
    </main>
  )
}
