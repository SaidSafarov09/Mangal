import React, { useState, useEffect } from 'react';
import './styles.scss';

import chImpact from '../../assets/photos/impact.jpg';
import Chart from '../../components/Chart/';
import Grid from '../../components/Grid/';
import ImpactModal from '../../components/ImpactModal';

import PageProvider from '../../hooks/PageContext';

const Impact = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <PageProvider>
            <div className='impact-banner'>
                <img src={chImpact} alt='Coffee harvest' />
                <h1>Команда опытных<br/>профессионалов</h1>
            </div>
            <div className='impact-content'>
                <p>Наша главная цель - радовать каждого гостя. Именно поэтому наша продукция готовиться не на конвеере, а руками профессионалов. Любую шаурму или пиццу можно приготовить по вашему желанию, с добавлением Ваших любимых ингридиентов.
                </p>
            </div>
            <div className='impact-chart'>         
                <Chart />
            </div>
            <div className='impact-grid'>  
                <Grid onClick={() => setIsOpen(!isOpen)}/>
                <ImpactModal
                    open={isOpen}
                    onClose={() => setIsOpen(!isOpen)}
                />
            </div>
        </PageProvider>
    )
}

export default Impact;
