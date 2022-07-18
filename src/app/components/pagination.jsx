import React from 'react';
import _ from 'lodash';

const Pagination = ({itemCount, pageSize, onPageChange, currentPage}) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null; //если элемаентов только на одну страницу, то не выводить
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li className={'page-item' + (page === currentPage ? ' active' : '')} key={'page_' + page}>
                        <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
                    </li>))}
            </ul>
        </nav>
    );
};

export default Pagination;