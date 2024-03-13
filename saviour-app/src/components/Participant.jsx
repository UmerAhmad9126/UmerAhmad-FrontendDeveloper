import React from 'react'
import "../styles/Participant.css"
import icon from "../assets/copyicon.svg"
const Participant = () => {
    return (
        <div className='participant-container'>



            <div className='event'>Participate in our IDO Event !</div>

            <div className='display-container'>

                <div className='event-1'>

                    <h1 className='ido-event'>During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.</h1>

                    <fieldset className='fieldset'>
                        <legend className='legend' >Token Info</legend>
                        <div className='token-container'>
                            <div className='token '>Total Token Supply</div>
                            <div className='token-child'>20%</div>
                        </div>

                        <div className='token-container'>
                            <div className='token' >Soft Cap</div>
                            <div className='token-child'>20%</div>
                        </div>
                        <div className='token-container' >
                            <div className='token' >Initial Exchange Rate</div>
                            <div className='token-child' >20%</div>
                        </div>

                        <p className='referral'>Recommended Referral Commission</p>

                        <div className='token-container'>
                            <div className='token' >1st Generation</div>
                            <div className='token-child' >20%</div>
                        </div>

                        <div className='token-container'>
                            <div className='token'  >2nd Generation</div>
                            <div className='token-child'>20%</div>
                        </div>

                    </fieldset>

                    <button className='btn'>Connect Wallet</button>

                    <h1 className='affiliate'>Become an affiliate & Earn 7% as Commission!</h1>

                    <div className='generate'>
                        <div className='generate-link'>
                            <p className='referal-link'>Generate a unique referral link</p>
                            <button className='btn'>Generate</button>
                        </div>


                        <div>
                            <img src={icon} alt='icon-image' />
                        </div>


                    </div>

                </div>

                <fieldset className='event-2'>
                    <div className='presale'>
                        PRESALE 1
                    </div>

                    <div className='price'>1 Saviour = 0.657 USDT</div>
                    <div className='price'>Next Stage Price = 0.723 USDT</div>
                    <div className='price'>Sold - $34,56,56,764/$50,00,00,000</div>
                    <div className='price'>Raised - $34,56,56,764/$40,00,00,000</div>

                    <div className='price button '>Enter the amount (BNB)</div>
                    <div className='price button'>Minimum Quantity to Buy</div>
                    <div className='price button'>Maximum Quantity of Tokens</div>

                    <div className='buy'>
                        <button className='btn'>Buy</button>
                        <button className='btn'>Claim Drop</button>
                    </div>
                </fieldset>

            </div>

            {/* <div className='wrapper-overlay'></div> */}



        </div>
    )
}

export default Participant