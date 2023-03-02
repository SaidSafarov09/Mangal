import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

const Textarea = ({ label, name, placeholder, rows, cols, limit, required, value, onChange, errors }) => {
    const [count, setCount] = useState(0);
    // display count of typed characters
    const handleChange = (e) => {
        onChange(e);
        setCount(e.target.value.length);
      };
    
    return (
        <div className='textarea'>
            <div className='row'>
                <label>{label}{required ? <span>*</span> : ''}</label>
                <p>{count}{limit}</p>
            </div>
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                rows={rows}
                cols={cols}
            />
              {errors && <p>{errors}</p>}
            </div>
    )
}

Textarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    limit: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    errors: PropTypes.string,
};
  
Textarea.defaultProps = {
    label: '',
    type: '',
    name: '',
    placeholder: '',
    limit: '',
    required: false,
    errors: '',
};

export default Textarea;