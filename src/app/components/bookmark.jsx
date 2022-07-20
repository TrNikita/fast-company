import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({status, ...rest}) => {
    return (
        <button className='border border-dark' {...rest}>
            <i
                className={`align-middle p-1 ${
                    status ? 'bi bi-cup-hot-fill' : 'bi bi-cloud-snow'
                }`}
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
};

export default BookMark;
