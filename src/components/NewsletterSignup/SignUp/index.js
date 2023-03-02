import React from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

import useForm from '../../../hooks/useForm';
import validate from '../Validation';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Button';

const SignUp = ({ submitForm }) => {
    const { handleSubmit, handleChange, values, errors } = useForm( submitForm, validate );

    return (
        <form
            className='subscribe-container'
            onSubmit={handleSubmit}
            noValidate
        >
            <div className='subscribe-column'>
                <h1>Не пропустите наши Новости<span> </span><br/>и Акции</h1>
                <p>Больше информации о наших акциях и предложения. Подпишитесь на наш инстаграмм и следите за новостями.</p>
            </div>
            <div className='subscribe-row'>
                {/* <Input
                    type='text'
                    name='email'
                    placeholder='Введите Email адресс'
                    value={values.email}
                    errors={errors.email}
                    onChange={handleChange}
                />
                <Button type='submit' text='Войти'/> */}
                <h2><a href='https://www.instagram.com/mangalkzn1'>Подписаться!</a></h2>
            </div>
        </form>
    )
}

SignUp.propTypes = {
    submitForm: PropTypes.func,
  };
  
SignUp.defaultProps = {
    submitForm: '',
  };

export default SignUp;
