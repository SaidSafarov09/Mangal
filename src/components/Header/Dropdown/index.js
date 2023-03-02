import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export const DropdownItem = ({ page, to, onClick }) => {
    return (
        <li>
            <Link
                onClick={onClick}
                className='dropdown-link'
                to={to}
            >
                {page}
            </Link>
        </li>
    )
};

export const pageLinks = [
    {
        page: 'Квиз',
        link: '/quiz'
    },
    // {
    //     page: 'О нас',
    //     link: '/about',
    // },
    {
        page: 'Контакты',
        link: '/contact'
    },
];

const Dropdown = () => {
    const [closeDropdown, setCloseDropdown] = useState(true);
    
    return (
        <div className={closeDropdown ? 'dropdown' :'dropdown closed'}>
            <ul>
                {pageLinks.map((item, index) => {
                    return (
                        <DropdownItem
                            key={index}
                            page={item.page}
                            to={item.link}
                            onClick={() => setCloseDropdown(false)}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export default Dropdown
