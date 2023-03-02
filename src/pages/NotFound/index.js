import React, { useEffect } from 'react';
import './styles.scss';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div className='not-found'>
            <div className='error-cover'></div>
        </div>
    )
}

export default NotFound;
