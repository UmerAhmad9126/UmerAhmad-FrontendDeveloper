import React from 'react'
import "../styles/Tokennomics.css"
import tokennomicsImg from "../assets/Frame 1824.png"

const Tokennomics = () => {
    return (
        <div className='tokennomics-container'>
            <div className='tokennomics-heading'>
                Tokenomics
            </div>

            <div className='tokennomics-content'>

                <div>
                    <fieldset className='fieldset'>
                        <legend className='legend'>Token Details</legend>

                        <div className='details-container'>
                            <p className='color-white'>Name</p>
                            <p className='color-red'>Saviour</p>
                        </div>

                        <div className='details-container'>
                            <p className='color-white'>Symbol</p>
                            <p className='color-red'>SVR</p>
                        </div>

                        <div className='details-container'>
                            <p className='color-white'>Total Supply</p>
                            <p className='color-red'>1000 Trillion</p>
                        </div>

                        <div className='details-container'>
                            <p className='color-white'>Decimals</p>
                            <p className='color-red'>18</p>
                        </div >
                    </fieldset >
                </div >

                <div>
                    <img src={tokennomicsImg} alt="tokennomicsImg" />
                </div>

            </div >
        </div >
    )
}

export default Tokennomics