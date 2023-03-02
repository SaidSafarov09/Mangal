import React, { useEffect } from 'react';
import '../styles.scss';

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='about'>
            <div className='cover'>
                <div className='team-photo'></div>
                <div className='bar'>
                    <h2>Who is Behind All Those Cups of Coffee</h2>
                </div>
            </div>
            <div className='content'>
                <p>Well, it's not a big team: it's just me, <a href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel='noreferrer'>Thiago Correia</a>. I created this imaginary company to use in my front-end web development project. So, in addition to building this website, I elaborated this cafe with a generic name and a simple brand. Also I designed the graphic arts using and editing Freepik mockups, Unsplah images and Pexels videos. I really hope you enjoyed my work.</p>
                <p>If you want to contact me, please click on the link with my name.</p>
                <p>Thank you for your time.</p>
            </div>
        </div>
    )
}

export default Team;
