import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import validate from './Validation';
import useForm from './../../hooks/useForm';
import Select from './Select';
import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';

const Form = ({ submitForm }) => {
    const { handleSubmit, handleChange, values, errors } = useForm( submitForm, validate );
    
    return (
        <div className='form'>
            
            <form
                action='/src/components/Form/send.php'
                onSubmit={handleSubmit}
                noValidate
                method='POST'
            >
                <div className='form-row'>
                    <Input
                        label='Имя'
                        type='text'
                        name='firstname'
                        value={values.firstname}
                        onChange={handleChange}
                        errors={errors.firstname}
                        required
                    />
                    <Input
                        label='Фамилия'
                        type='text'
                        name='lastname'
                        value={values.lastname}
                        onChange={handleChange}
                        errors={errors.lastname}
                        required
                    />
                </div>
                <Input
                    label='Номер телефона'
                    type='tel' name='phone'
                    value={values.phone}
                    onChange={handleChange}
                />
                <Input
                    label='Email-адрес'
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    errors={errors.email}
                    required
                />
                <Input
                    label='Подтвердите Email-адрес'
                    type='text'
                    name='email2'
                    value={values.email2}
                    onChange={handleChange}
                    errors={errors.email2}
                    required
                />
                <Select
                    label='Пожалуйста, выберите тему'
                    name='select'
                    value={values.select}
                    onChange={handleChange}
                    errors={errors.select}
                    required
                />
                <Textarea
                    label='Обращение'
                    name='message'
                    placeholder='Введите здесь своё сообщение'
                    rows={5}
                    limit='/1200'
                    value={values.message}
                    onChange={handleChange}
                    errors={errors.message}
                    required
                />
                <Button
                    text='Отправить'
                    type='submit'
                />
            </form>
        </div>
        
    )
}

Form.propTypes = {
    submitForm: PropTypes.func,
  };
  
Form.defaultProps = {
    submitForm: '',
  };

export default Form;