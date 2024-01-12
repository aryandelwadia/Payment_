    import React from 'react'
    import imagePath from '../assets/logo.png';
    import './Navbar.css';

    export const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <nav>
                        <a>
                            <img src={imagePath} alt='logo'/>
                        </a>
                        <div>
                            <ul>
                                <li>Personal</li>
                                <li>Pay Now</li>
                                <li>Financial Management</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
    }
