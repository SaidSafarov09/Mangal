import React from 'react';
import './styles.scss';

import { menuSections } from '../../../data/menu';
import { useValue } from '../../../hooks/PageContext';

const MenuCard = () => {
    const { currentValue } = useValue();

    return (
        <div className='menu-card' id='menu-card'>
            <div className='content'>
                <h1>{currentValue}</h1>
                    {menuSections.map((menu) => 
                        menu.subsections.map((subsection) => {
                            return (
                            <div key={subsection.id}>
                                { // filter by food | drink 
                                subsection.type === currentValue
                                && subsection.items.map((item, index) => {
                                    return (   
                                        <table>
                                        <div
                                        className='card-item'
                                        key={index}
                                        > 
                                            <th><h2>{item.subtype}</h2>
                                            <td><p>{item.ingredients}</p></td>
                                            </th>
                                               
                                        </div>
                                        </table>
    
                                    )
                                })}
                            </div>)
                        })
                    )}
            </div>
            {/* <div className='image'>
                {menuSections.map((menu) => 
                        menu.subsections.map((subsection) => {
                            return (
                            <div key={subsection.id}>
                                {// filter by food | drink
                                subsection.type === currentValue
                                && <img
                                        src={subsection.image}
                                        alt={currentValue}
                                    >                                        
                                    </img>
                                }
                            </div>)
                        })
                    )}
            </div> */}
        </div>
    )
}

export default MenuCard;