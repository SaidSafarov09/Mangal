import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { useValue } from '../../../hooks/PageContext';



const MenuList = ({ section, subsections }) => {
    const [showList, setShowList] = useState(false);
    const { setCurrentValue } = useValue();
    
    return (
        <div className='sections'>
            <li 
                onClick={() => setShowList(!showList)}>{section}
                <div className={showList ? 'active arrow' : 'arrow'}>
                    <i className='fas fa-caret-up'></i>
                </div>
            </li>
            <ul className={showList ? 'grow-down' : 'close-up'}>
                {subsections.map((submenu, index) => {
                    return <li key={index} 
                                onClick={() => {
                                    setCurrentValue(submenu.type); 
                                    setShowList(!showList);
                                }
                            }
                            >
                                {submenu.type}
                            </li>
                            
                })}
            </ul>
        </div>
    )
}

MenuList.propTypes = {
    section: PropTypes.string,
    subsections: PropTypes.arrayOf(PropTypes.object),
};

MenuList.defaultProps = {
    section: '',
    subsections: [],
};

export default MenuList;
