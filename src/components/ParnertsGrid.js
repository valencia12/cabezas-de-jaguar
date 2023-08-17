import React, { useEffect } from 'react'
import Aos from 'aos';

const ParnertsGrid = ({ card, images, partnersAlt }) => {
    if (!card) {
        console.log(partnersAlt);
    }
    useEffect(() => {
        Aos.init({ duration: 1000, })
    }, [])
    return (
        <div className='mt-16'>
            <div className='partner-grid'>
                {partnersAlt.map((imgs,keys) => {
                    if (card) {
                        return (
                            <div data-aos="fade-left" className='partner-item w-24 h-24 shadow-lg rounded-full flex justify-center items-center p-5 md:w-48 md:h-48 lg:w-72 lg:h-72' style={{ background: "#fff", zIndex: 1 }} >
                                <img style={{ width: "75%" }} src={imgs.img} alt={imgs.namestag} />
                            </div>
                        )
                    } else {
                        return (
                            <div data-aos="fade-left" className='partner-item w-28 sm:w-40 lg:w-48 xl:w-60 lg:mx-4 flex justify-center items-center'>
                                <img className={`md:w-24 w-full ${((keys==2) ||(keys==4) ||(keys==5) || (keys==6) || (keys==7))? 'lg:w-64':'lg:w-48'}`} src={imgs.img} alt={imgs.namestag} />
                                
                            </div>
                        )
                    }

                })}

            </div>
        </div>
    )
}

export default ParnertsGrid