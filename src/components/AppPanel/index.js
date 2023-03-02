import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import chApp from '../../assets/ch-app.png';
import smartphone from '../../assets/photos/smartphone.png';

const AppPanel = () => {
    return (
        <div className='app(app)'>
            {/* <figure>
                <img src={smartphone} alt='Smartphone' />
            </figure> */}
            {/* <div className='content'>
                <h1>Заказывайте прямо в приложении</h1>
                <p>Скачайте наше мобильное приложение, зарегестрируйтесь и заказывайте заранее, чтобы не стоять в очереди. В приложении можно воспользоваться купонами и интересными предложениями.</p>
                {/* <Link to='/'>
                    <img src={chApp} alt='CH App Button'/>
                </Link> */}
            {/* </div> */}
        </div>
    )
}

export default AppPanel;
