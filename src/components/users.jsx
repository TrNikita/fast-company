import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import User from './user';

const Users = ({users, ...rest}) => {

    return (
        <>
            {users.length > 0 &&
                <table className="table table-striped table-hover text-center">

                    <thead>
                    <tr>
                        {['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное', '']
                            .map(i => <th scope="col" key={i}> {i} </th>)}
                    </tr>
                    </thead>

                    <tbody>
                    <User
                        user={users}
                        {...rest}
                    />
                    </tbody>
                </table>
            }
        </>
    );
};

export default Users;