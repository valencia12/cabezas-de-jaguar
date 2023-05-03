import React from 'react'
import fede from "../../assets/fede.png"
import fede1 from "../../assets/fede1.png"
import fede2 from "../../assets/fede2.png"
import cabezas from "../../assets/cabezas.png"
import archivo from "../../assets/archivo.png"
import pena from "../../assets/pena.png" 
export default function Sections() {
    return (
        <div>
            <div
                style={{
                    textAlign:"center",
                    padding:"15% 15% 5% 15%"
                }}
            >
                <h1
                    style={{
                        color:"#4A33D3",
                        padding:"2%"
                    }}
                >
                    “Del mineral a la
                    piedra”
                </h1>

                <button className='btn btn-outline-secondary'
                    style={{
                        padding:"1%"
                    }}
                >
                    ¿Quienes somos?
                </button>
            </div>
            {/** Otra seccion */}
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <img src={fede} />
                <h1 style={{
                    marginTop: "-5%",
                    color: "#4A33D3"
                }}>Federico Paredes</h1>
                <h2
                    style={{
                        color: "#EAAB3D"
                    }}
                >Fundador</h2>
                <div
                    style={{

                        textAlign: "center"
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "cursive"
                        }}
                    >
                        Este es un espacio para hablar un poco sobre la hoja <br /> de vida de Federico,  su trayectoria como artista, <br />antropologo, docente y arqueologo.
                    </h2>
                    <div
                        style={{
                            padding: "2%"
                        }}
                    >
                        <img src={fede1} style={{
                            width: "20%",
                            height: "20%",
                            padding: "1%"
                        }} />
                        <img src={fede2} style={{
                            width: "20%",
                            height: "20%",
                            padding: "1%"
                        }} />
                    </div>
                    <button className='btn btn-outline-secondary'
                        style={{

                        }}
                    >
                        Entrevista con Federico
                    </button>
                    
                </div>
                <div>
                    <img src={cabezas} 
                    style={{
                        width:"40%",
                        padding:"2%"
                    }}
                    />
                </div>
                <div>
                    <img src={archivo} 
                    style={{
                        width:"40%",
                        padding:"2%"
                    }}
                    />
                </div>
                <div>
                    <img src={pena} 
                    style={{
                        width:"40%",
                        padding:"2%"
                    }}
                    />
                </div>
            </div>
        </div>
    )
}
