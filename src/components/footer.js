import React from "react"
import '../styles/bulma.min.css'
import githubLogoImg from '../images/github-logo.png'

export default function Footer() {
  return (
    <footer className="footer has-text-centered">
      <div className="container is-centered" style={{ maxWidth: 800 }}>
        <div className="level">
          <p className="level-item">
            <a href='/privacy-policy'>Privacy Policy</a>
          </p>

          <p className="level-item">
            <a href='/terms-of-service'>Terms of Service</a>
          </p>

          <p className="level-item">
            <a href='mailto:flannery.jefferson@gmail.com'>Support</a> 
          </p>
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: '48px' }}>
        <p className='is-centered' style={{ marginBottom: '12px' }}>
        Urban Applause &copy;
        <script type="text/javascript">
          document.write(new Date().getFullYear());
        </script>
        </p>

        <a target='_blank' className='social-link' href='https://github.com/flannerykj/urbanapplause-ios' target='_blank'>
          <span className='icon'>
            <img src={githubLogoImg} />
          </span>
        </a>
      </div>

    </footer>
  )
}
