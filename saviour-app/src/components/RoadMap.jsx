import React from 'react'
import "../styles/Roadmap.css"
import link from "../assets/Link.png"
import link1 from "../assets/Link (1).png"
import link2 from "../assets/Link (2).png"
import link3 from "../assets/Link (3).png"


const RoadMap = () => {
    return (
        <div className='roadmap-container'>

            <div className='roadmap-heading'>
                Road Map
            </div>

            <div className='link-container'>
                <img src={link} alt="link" />
                <img src={link1} alt="link" />
                <img src={link2} alt="link" />
                <img src={link3} alt="link" />
            </div>
        </div>
    )
}

export default RoadMap