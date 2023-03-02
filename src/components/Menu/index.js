import React from 'react';
import './styles.scss';

import { menuSections } from '../../data/menu';
import MenuCard from './MenuCard/';
import MenuList from './MenuList/';

import PageProvider from '../../hooks/PageContext';

const MainMenu = () => {
    return (
        <PageProvider defaultState='Меню'>
            <div className='main-menu'>
                <div className='menu-list'>
                    <ul className='nav-menu'>
                        {menuSections.map((menu) => {
                            return <MenuList
                            key={menu.id}
                            {...menu}/>
                        })}
                    </ul>
                </div>
                <MenuCard/>
            </div>
        </PageProvider>
    )
}

export default MainMenu;
