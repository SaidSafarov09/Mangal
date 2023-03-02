import React, {useState, useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import './styles.scss';

import MainMenu from '../../components/Menu/';
import beans from '../../assets/videos/beans.mp4';
import Banner from '../../components/Banner';
import chStore from '../../assets/photos/ch-store-sign.jpg';
import chContact from '../../assets/photos/coffee-latte.jpg';

const Menu = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pageLoader = setTimeout(() => {
            setLoading(false)
        }, 1200);
        return () => {
            // remove callback bound to loader
            clearTimeout(pageLoader);
        }
    }, []);

    return (
        <div className='menu'>
            {loading ?
                <div className='loading-container'>
                    <SyncLoader
                        color={'#b69861'}
                        loading={loading}
                        size={13}
                        margin={8}
                    />
                </div>
            : <>
                <div className='cover'>
                    <video src={beans} autoPlay loop muted />
                    <div className='content'>
                        <h1>Меню</h1>
                        <h2>Вкусная еда, свежий кофе и выпечка<br/> В нашем меню найдется позиция на любой вкус и вы будете в восторге</h2>
                    </div>
                </div>
                <MainMenu />
                <div className='banner-wrapper'>
                    <Banner
                        title='Ищете где вкусно покушать?'
                        subtitle='Найдите ресторан рядом с вами'
                        to='/stores'
                        buttonText='Посетить нас'
                        image={chStore}
                        marginBottom='2rem'
                    />   
                    <Banner
                        title='Чем мы можем вам помочь?'
                        subtitle='Мы хотим услышать ваши вопросы и предложения.'
                        to='/contact'
                        buttonText='Свяжитесь с нами'
                        image={chContact}
                        right                
                    />
                                        
                </div>   
            </>}   
            </div>
    )
}

export default Menu;