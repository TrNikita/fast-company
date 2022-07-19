import React from "react";

const BookMark = ({ status, ...rest }) => {
    return (
        <button className="border border-dark" {...rest}>
            <i
                className={`align-middle p-1 ${
                    status ? "bi bi-cup-hot-fill" : "bi bi-cloud-snow"
                }`}
            ></i>
        </button>
    );
};

export default BookMark;
