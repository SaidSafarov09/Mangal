import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

import logo from '../../assets/ch-logo.png';
import DropdownMenu from './Dropdown/';
import Icon from '../Icon';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const onClose = () => {
        setMobileMenu(false);
        return (document.body.style.position = 'static');
    };

    const onOpen = () => {
        setMobileMenu(true);
        return (document.body.style.position = 'fixed');
    };

    const handleClick = () => {
        setMobileMenu(!mobileMenu);
        if (mobileMenu === false) {onOpen()} else {onClose()}
    };

    // close mobile menu by clicking on a link
    const { pathname } = useLocation()
    useEffect(() => {
        setMobileMenu(false);
        onClose();
    }, [pathname]);

    const showMobileMenu = () => {
        if (window.innerWidth >= 720) {onClose()}
    };

    useEffect(() => {
        showMobileMenu();
        });
    window.addEventListener('resize', showMobileMenu);


    return (
        <>
            <nav className='navbar'>
            
                <div className='container'>
                    <Link to='/' onClick={() => setMobileMenu(onClose)}>
                        <img src={logo} className='logo' alt='CH logo'/>
                    </Link>
                    <div
                        className={mobileMenu ? 'menu-icon active' : 'menu-icon'}
                        onClick={() => setMobileMenu(handleClick)}
                    >
                        <div className='line top'></div>
                        <div className='line middle'></div>
                        <div className='line bottom'></div>
                    </div>
                    <ul className={mobileMenu ? 'nav-list mobile' : 'nav-list'}>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-link'
                                onClick={() => setMobileMenu(onClose)}
                            >
                                Главная
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/menu'
                                className='nav-link'
                                onClick={() => setMobileMenu(onClose)}
                            >
                                Меню
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/impact'
                                className='nav-link'
                                onClick={() => setMobileMenu(onClose)}
                            >
                                Заботимся о Вас
                            </Link>
                        </li>
                        <li
                            className='nav-item'
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                        >
                            <p className='nav-link'>Больше</p>
                            {dropdown && <DropdownMenu />}
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/stores'
                                className='nav-link'
                                onClick={() => setMobileMenu(onClose)}
                            >
                                <Icon
                                    className='fas fa-map-marker-alt'
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={mobileMenu ? 'overlay' : 'overlay inactive'}
                    onClick={() => setMobileMenu(onClose)}
                />
            </nav>
        </>
    )
}

export default Header;
