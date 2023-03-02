import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, size, color, hoverColor, width, height, cursor, onClick  }) => {
    const [ fill, setFill ] = useState(color);
    
    return (
        <div>
            <i
                className={className}
                onClick={onClick}
                onMouseOver={() => setFill(hoverColor)}
                onMouseOut={() => setFill(color)}
                style={{ fontSize: size, color: fill, width: width, height: height, cursor: cursor, transition: '0.2s' }}
            />
        </div>
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cursor: PropTypes.string,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    className: '',
    size: '',
    hoverColor: 'none',
    width: '100%',
    height: '100%',
    cursor: '',
};

export default Icon;