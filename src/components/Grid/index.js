import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { impactPratices } from '../../data/impactPratices';
import { useValue } from '../../hooks/PageContext';

const Grid = ({ onClick }) => {
    const { setCurrentValue } = useValue();
    return (
        <div className='grid' onClick={onClick}>
            <div className='container'>
                {impactPratices.map((item, index) => {
                    return (
                        <figure key={index}>
                            <img
                                src={item.image}
                                alt={item.description}
                                onClick={() => setCurrentValue(item.id)}
                                ></img>
                        </figure>
                    )
                })}
            </div>
        </div>
    )
}

Grid.propTypes = {
    onClick: PropTypes.func,
}

export default Grid;
