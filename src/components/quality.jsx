import React from 'react';

const Quality = ({user}) => {
    return (
        <>
            {user.qualities.map(qualitie => (
                <span
                    className={`badge bg-${qualitie.color} m-1`}
                    key={user._id + qualitie._id}
                >
                    {qualitie.name}
                </span>),
            )}
        </>
    );
};

export default Quality;