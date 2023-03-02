import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ question, options, onChange, id, value, active }) => {
    if (active === false) return null;

    return (
        <div className='question-card'>
            <h2>{question}</h2>
            <div className='radio'>
                {options.map((option) => (
                <label className='check-label' key={option}>
                    <input
                        type='radio'
                        id={id}
                        value={option}
                        onChange={onChange}
                        checked={value === option}
                        name='option'
                    />
                    {option}
                </label>
                ))}
            </div>
        </div>
    );
};

Radio.propTypes = {
    question: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    id: PropTypes.string,
    onChange: PropTypes.func,
    slide: PropTypes.number,
};

Radio.defaultProps = {
    section: '',
    subsections: [],
};

export default Radio;
