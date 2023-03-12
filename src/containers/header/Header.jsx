import React from 'react';
import './header.css';
import people from '../../assets/images/people.png';
import ai from '../../assets/images/ai.png'
const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>P &amp; P Optica:</h1> 
                <h2 className='gradient__text'>Field Services - Operations Support</h2>
                
                <p>Your home for Field Services Knowledge and Tools</p>

                {/* <div className='gpt3__header-content__input'>
                    <input type="email" placeholder='your email address' />
                    <button type='buttom'>Get Started</button>
                </div> */}
                {/* <div className='gpt3__header-content__people'>
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div> */}
                
            </div>
            <div className='gpt3__header-image'>
                {/* <img src={ai} alt="ai" /> */}
            </div>
        </div>
    )
}

export default Header
