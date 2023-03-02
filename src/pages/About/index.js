import React, { useEffect } from 'react';
import './styles.scss';

import coffeeBerry from '../../assets/photos/coffee-berry.jpg';
import coffeeBeans from '../../assets/photos/coffee-beans.jpg';
import coffeePot from '../../assets/photos/coffee-pot.jpg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='about'>
            <div className='cover'>
                <div className='story-photo'></div>
                <div className='bar'>
                    <h2>Еда это<span> </span><br/>наше все</h2>
                </div>
            </div>
            <div className='content'>
                <p>Мы открылись вместо МакдональдсаМы открылись вместо МакдональдсаМы открылись вместо МакдональдсаМы открылись вместо МакдональдсаМы открылись вместо Макдональдса</p>
                <p>Очень вкусная еда Очень вкусная еда Очень вкусная еда Очень вкусная еда Очень вкусная еда Очень вкусная еда Очень вкусная еда Очень вкусная еда</p>
                <p>Используем лучшие продукты Используем лучшие продукты Используем лучшие продукты Используем лучшие продукты Используем лучшие продукты Используем лучшие продукты</p>
            </div>
            <div className='gallery'>
                <img src={coffeeBerry} alt='Coffee berry'/>
                <img src={coffeeBeans} alt='Coffee beans'/>
                <img src={coffeePot} alt='Coffee pot'/>
            </div>
        </div>
    )
}

export default About;
