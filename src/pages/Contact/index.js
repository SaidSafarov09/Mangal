import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';

import Form from '../../components/Form';
import SuccessMessage from '../../components/Form/SuccessMessage';

const Contact = () => {      
    const [submitted, setSubmitted] = useState(false);

    const submitForm = useCallback(() => {
            setSubmitted(true);
    }, [setSubmitted])    
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
          
    return (
        <div className='contact'>
            <div className='page-header'>
                <h1>Обратная связь</h1>
            </div>
            <div className='content'>
                <h2>Вы можете связаться с нами и мы решим все вопросы</h2>
                <p>Если вы не можете найти то, что ищете на веб-сайте, не стесняйтесь отправить свой вопрос или предложение, используя эту форму. Мы будем рады услышать ваши отзывы.</p>
            </div>
            {!submitted? <Form submitForm={submitForm} /> : <SuccessMessage /> }
        </div>
    )
}

export default Contact;
