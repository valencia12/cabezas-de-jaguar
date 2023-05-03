import React from 'react'
import Logo from "../../assets/logo.png"
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg justify-content-center"
                style={{
                    backgroundColor:"#C85C48",
                    color:"#4A33D3",
                }}
            >
                <div className="container-fluid">
                    <img  
                    style={{
                        maxWidth:"100%",
                        height:"auto"
                    }}
                    src={Logo} className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cabezas de Jaguar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Archivo rojo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Centro cultural</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">¿Quiénes somos?</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav></>
    )
}
