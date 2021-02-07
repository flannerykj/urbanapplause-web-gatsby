import React from "react"
import Layout from "../components/layout"

const sectionStyle = {
  marginTop: 16 
}

const AboutPage = () => (
  <Layout showNavbar>
    <div>
      <h1 className='title is-1' id='top'>About</h1>

      <section className='_section' style={sectionStyle}>
        <h2 id='what-is' className='title is-3'>What Is Urban Applause</h2>
        <p>Urban Applause lets you track street artists. You can use it to find awesome art in your neighbourhood, or to track your favorite artists as they move between cities.</p>
      </section>

      <section className='_section' style={sectionStyle}>
        <h2 id='how-it-works' className='title is-3'>How It Works</h2>
        <p>Anyone can upload to Urban Applause. Whether or not you know who the artist is, add photos of great street art you find here. If you do know the artist, you can create a new profile for them.</p>
      </section>

    </div>
  </Layout>
)
export default AboutPage
