import React from 'react'
import './Footer.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Footer () {
    return (
        <>
            <div className="footerContainer">
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <p className="footerMessage">Made using Vite + React</p>
        </>
    )
}

export default Footer;