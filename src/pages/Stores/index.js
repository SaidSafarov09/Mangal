import React, { useState, useEffect } from 'react';
import './styles.scss';
import { storeData, storeButton } from '../../data/storeData';
import Icon from '../../components/Icon';

const Stores = () => {
    const [ storeList, setStoreList ] = useState('physical store');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='stores'>            
            <div className='page-header'>
                <h1>Адреса</h1>
            </div>
            <div className='filter-bar'>
                <div className='filter-wrapper'>
                    <h2>Фильтры</h2>
                    <div>
                        {storeButton.map((button, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => setStoreList(button.type)}
                                >
                                    <Icon
                                        className={button.icon}
                                        size={button.size}
                                    />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='store-cards'>
                {storeData.map((store, index) => {
                    // filter stores by state | facility       
                    return store.facilities.indexOf(storeList) >= 0 && (
                        <div className='store-card' key={index}>
                            <h1>{store.name}</h1>
                            <div className='store-data'>  
                                <div className='icon-wrapper'>                      
                                    <Icon
                                        className='fas fa-store-alt'
                                        size='0.9rem'
                                    />
                                </div>
                                <p>{store.address}</p>
                            </div>
                            <div className='store-data'>
                                <div className='icon-wrapper'>  
                                    <Icon
                                        className='fas fa-clock'
                                        size='0.9rem'
                                    />
                                </div>
                                <p>{store.hour}</p>
                            </div>
                            {store.services.map((service, index) => {
                                return (
                                    <div className='store-data' key={index}>
                                        <div className='icon-wrapper'>
                                            <Icon
                                                className={service.icon}
                                                size={service.size}
                                            />
                                        </div>
                                        <p>{service.type}</p>
                                    </div>)
                            })}
                            <a
                                className='store-data link-maps'
                                href={store.link}
                                target='_blank'
                                rel='noreferrer'                            
                            >
                                <div className='icon-wrapper'>  
                                    <Icon
                                        className='fas fa-map-marker-alt'
                                        size='1.1rem'
                                    />
                                </div>
                                <p>Откройте в Яндекс картах</p>
                            </a>
                        </div>
                    )                       
                })}
            </div>
        </div>
    )
}

export default Stores;
