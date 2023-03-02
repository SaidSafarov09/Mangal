import React from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

import { selectOptions } from '../../../data/selectOptions';

const Select = ({ label, name, required, value, onChange, errors }) => {
    return (
        <div className='select'>
        <label>{label}{required ? <span>*</span> : ''}</label>
            <select name={name} value={value} onChange={onChange}>
                <option hidden>Выберите один пункт</option>
                {selectOptions.map((item, index ) => {
                    return <option key={index} value={item.value}>{item.option}</option>
                })}
            </select>
            {errors && <p>{errors}</p>}
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    errors: PropTypes.string,
  };
  
  Select.defaultProps = {
    label: '',
    name: '',
    required: false,
    value: '',
    errors: '',
  };

export default Select;