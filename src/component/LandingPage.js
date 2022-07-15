import React from 'react'
import '../App.css';
import Img from '../assets/images/bg.png'

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${Img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <h1 className="main-title text-center" style={{ color: "black" }}>MERN DEMO</h1>
            <div className="buttons text-center">
            </div>
        </header>
    )
}