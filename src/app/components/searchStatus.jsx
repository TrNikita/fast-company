import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({length}) => {
    const peopleCount = (length) => {
        if (length === 0) return 'Никто с тобой не тусанет';
        if (
            length % 10 >= 2 &&
            length % 10 <= 4 &&
            (length % 100 > 20 || length % 100 < 10)
        )
            return `${length} человека тусанет с тобой сегодня`;
        else return `${length} человек тусанет с тобой сегодня`;
    };

    return (
        <h2>
            <span
                className={
                    length !== 0 ? 'badge bg-primary' : 'badge bg-danger'
                }
            >
                {peopleCount(length)}
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired,
};

export default SearchStatus;
