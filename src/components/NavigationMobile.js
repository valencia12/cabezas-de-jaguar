import React, { useState } from 'react'
import main from '../assets/images/icon66.svg'
import icon1 from '../assets/images/icon11.svg'
import icon2 from '../assets/images/icon22.svg'
import icon3 from '../assets/images/icon33.svg'
import icon4 from '../assets/images/icon44.svg'
import icon5 from '../assets/images/icon55.svg'
import { HashLink } from 'react-router-hash-link';
import { Anchor } from "antd";


const items = [{
    id: "1",
    icon: icon1,
    ids: "#top"
}, {
    id: "2",
    icon: icon2,
    ids: "#what-we-do-section"
}, {
    id: "3",
    icon: icon3,
    ids: "#keyprojects"
}, {
    id: "4",
    icon: icon4,
    ids: "#partners"
}, {
    id: "5",
    icon: icon5,
    ids: "#theteam"
}, {
    id: "6",
    icon: main,
    ids: "#contactUs"
}]


const NavigationMobile = () => {
    const [selected, setSelected] = useState("0")
    const handleClick = (e, link) => {
        console.log("s");
    };
    return (
        <nav className='nav-mobile flex flex-col'>
            {
                items.map(it => (
                    <div className='flex flex-1 justify-center items-center relative'>

                        <HashLink smooth to={it.ids}>
                            {selected == it.id && (<div className='primary-bg w-14 h-14 rounded-full absolute z-0 left-8' />)}
                            <img className={`w-8 h-8 z-10 ${selected == it.id && 'ml-6'}`} src={it.icon} />
                        </HashLink>
                    </div>

                ))
            }
        </nav>
    )
}
export default NavigationMobile