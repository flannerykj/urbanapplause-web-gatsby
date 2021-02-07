import * as React from "react"
import '../styles/bulma.min.css'
import iPhoneApp from '../images/iphone_app.png'
import iosAppStoreButton from '../images/ios_app_store_button_en.png'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout showNavbar>
      <title>Urban Applause</title>
      <div className="container">
        <div className='section has-text-centered' style={{ flex: 1, marginTop: 64 }}>
          <h1 className='title is-1'>
            Urban Applause 
          </h1>
          <h2 className='subtitle is-4'>The Street Art App </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={iPhoneApp} style={{ height: '400px', marginBottom: '24px' }} />
            <a href='https://apps.apple.com/ca/app/urban-applause/id1488053225' target="_blank"><img src={iosAppStoreButton} style={{ height: '40px' }}/></a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
