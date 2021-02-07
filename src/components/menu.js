import React from "react"
import '../styles/bulma.min.css'
import logo from '../images/icon.png'

export default function Navbar() {
  return (
    <a style={{float: 'left', position: 'absolute' }} href='/'><img src={logo} style={{ width: 'auto', height: '200px'}} /></a>
  )
}
