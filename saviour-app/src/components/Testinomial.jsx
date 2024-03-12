import React from 'react'
// import testinomialImg from "../assets/Brick_Matrix_Generate.png"
import testinomialImg1 from "../assets/sg_head.svg"
import  '../styles/Testinomial.css'
const Testinomial = () => {
    return (
        <div className='testinomial-container'>

            <div  >
                <h1 >Introduction</h1>

                <p>We've all been in the mud once, and now we've decided to fight it out. Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! Our mission is to empower everyone to share wealth and succeed. read more...</p>

                <button className='btn' >Documents</button>
            </div>

            <div>
                <img src={testinomialImg1} alt="testinomialImg"    />
            </div>

        </div>
    )
}

export default Testinomial