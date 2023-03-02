import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import Button from '../Button';

const Card = ({ title, subtitle, to, buttonText, image }) => {
    return (
        <div className='card-container'>            
            <div className='image'
                style={{ background: `url(${image}) no-repeat center center`,
                display: 'block', backgroundSize: 'cover', heigh: '100%'}}
            />
            <div className='content'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <Link to={to}>
                    <Button phantom text={buttonText} />
                </Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    to: PropTypes.string,
    image: PropTypes.string,
    buttonText: PropTypes.string,
};

export default Card;
