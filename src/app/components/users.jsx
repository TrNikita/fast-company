import React, { useState } from 'react';
import User from './user';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

const Users = ({users, ...rest}) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

     return (
        <>
            {users.length > 0 && (
                <table className="table table-striped table-hover text-center">

                    <thead>
                    <tr>
                        {['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное', '']
                            .map(i => <th scope="col" key={i}> {i} </th>)}
                    </tr>
                    </thead>

                    <tbody>
                    {userCrop.map((user) => (
                        <User key={user._id} {...rest} {...user} />
                    ))}
                    </tbody>

                </table>
            )}
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;