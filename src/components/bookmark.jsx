import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <h5>
            <i
                className={`align-middle p-1 ${bookmark ? 'bi bi-cup-hot-fill' : 'bi bi-cloud-snow'}`}
            >
            </i>
        </h5>
    );
};

export default Bookmark;