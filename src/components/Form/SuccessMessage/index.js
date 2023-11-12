import React from 'react';
import './styles.scss';

import Icon from '../../Icon';

const SuccessMessage = () => {
    return (
        <div className='success-message'>
            <Icon
                className='fas fa-check-circle'
                size='3.5rem'
                hover='$white'
            />
            <h2>Сообщение отправлено!</h2>
            <p>Служба поддержки Mangal свяжется с вами в ближайшее время.</p>
        </div>
    )
}

export default SuccessMessage;
