import React from 'react';
import './styles.scss';

const Order = () => {
    return (
         <div className='order'>
            <h1 className='title'>Способ заказа</h1>
            <p className='text'>Выберите способ получения заказа</p>
            <div className='cards'>              
                <div className='card'>
                    <i className='fas fa-mug-hot fa-2x'></i>
                    <h1><a href='tel:5581005'>Самовывоз</a></h1>
                    <p>Сделайте заказ прямо у нас или по телефону, Мы приготовим его к вашему прибытию</p>
                </div>
                <div className='card'>
                    <i className='fas fa-motorcycle fa-2x'></i>
                    <h1><a href='https://www.delivery-club.ru/srv/mangal_kazan'>Доставка</a></h1>
                    <p>Закажите ваши любимые блюда прямо к порогу вашего дома с помощью DeliveryClub</p>
                </div>
            </div>
        </div>
    )
}

export default Order;
