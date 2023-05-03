import React from 'react'
import ReactDOM from 'react-dom'
import useWindow from '../../Hooks/useWindows'
    


function BackDrop(props) {
    return <div
        onClick={props.close}
        style={{
            top: 0,
            left: 0,
            backgroundColor: 'rgba(61, 60, 60, 0.6)',
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            overflowX:"hidden",
            position:"fixed"
        }}
    >
        {props.children}
    </div>
}


export default function Modal(props) {

    const { isMobile } = useWindow();

    return (
        <>
            {props.show
                ? ReactDOM.createPortal(
                    <BackDrop close={props.close}>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            style={{
                                width: isMobile ? "95%" : "36%",
                                height: "100%",
                                backgroundColor: "#ffffff",
                                borderRadius: "2px",
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                overflow:"auto",
                                transition:"all 0.6s ease"
                            }}
                        >
                            
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    {props.children}
                                </div>
                          
                        </div>
                    </BackDrop>,

                    document.getElementById("Modal")
                )
                : null}
        </>
    );
}