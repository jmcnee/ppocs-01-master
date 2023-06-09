import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/images/ppologo.jpg';
import './navbar.css';
//  good so far
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="logo" width="150px" height="100px" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <p><a href='#home'>Home </a></p>
                    <p><a href='#wgpt3'>Support Links </a></p>
                    <p><a href='#possibility'>Customers</a></p>    
                    <p><a href='#features'>Case Studies </a></p>
                    <p><a href='#blog'>Learn-KB</a></p>
                </div> {/* good so far */}
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>{/* good so far */}
            <div className='gpt3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && ( // good so far
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                                <p><a href='#home'>Home </a></p>
                                <p><a href='#wgpt3'>What is GPT3? </a></p>
                                <p><a href='#possibility'>Open AI </a></p>    
                                <p><a href='#features'>Case Studies </a></p>
                                <p><a href='#blog'>Library </a></p>
                        </div>{/* good so far */}
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar
