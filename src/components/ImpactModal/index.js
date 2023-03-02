import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Modal from '../Modal';
import Icon from '../Icon'
import { impactPratices } from '../../data/impactPratices';
import { useValue } from '../../hooks/PageContext';

const ImpactModal = ({ onClose, open }) => {
    const { currentValue, setCurrentValue } = useValue();
    const length = impactPratices.length;

    const previousCard = () => {
        setCurrentValue(currentValue === 0 ? length - 1 : currentValue - 1); 
    }
    const nextCard = () => {
        setCurrentValue(currentValue === length - 1 ? 0 : currentValue + 1); 
    }

    if(!Array.isArray(impactPratices) || length <= 0) {
        return null;
    }
    return (
        <Modal open={open} onClose={onClose}>
            {impactPratices.map((item, index) => {
                return (
                    item.id === currentValue
                    && <div className='impact-modal' key={index}>
                        <div className='x-close'>
                            <Icon
                                className='fas fa-times'
                                onClick={onClose}
                                hoverColor='$secondary'
                                size='1.5rem'
                                cursor='pointer'
                            />
                        </div>
                        <img src={item.image} alt={item.description}></img>
                        <div className='arrows'>
                            <Icon
                                className='fas fa-chevron-left'
                                onClick={previousCard}
                                hoverColor='$secondary'
                                size='1.5rem'
                                cursor='pointer'
                            />
                            <Icon
                                className='fas fa-chevron-right'
                                onClick={nextCard}
                                hoverColor='$secondary'
                                size='1.5rem'
                                cursor='pointer'
                            />
                        </div>
                        <div className='content'>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </Modal>
    )
}

ImpactModal.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
}

export default ImpactModal;
