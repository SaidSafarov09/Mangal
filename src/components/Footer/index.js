import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Icon from '../Icon';
import { socialMedia } from '../../data/socialMedia';

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className='copyright'>
                <p>© Авторское право 2022 | "Mangal" . Все права защищены. <div>Тел: <a href='tel: +78435581005'>8-843-558-10-05</a></div></p>
            </div>
            <div className='social-media'>
                {socialMedia.map(( item, index ) => {
                    return (
                        <a key={index} href={item.link} target='_blank' rel='noreferrer'>
                            <Icon
                                className={item.icon}
                                hoverColor='$secondary'
                                size='1.5rem'
                            />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;
