import React, {useState} from 'react';
import API from '../api';
import "bootstrap/dist/css/bootstrap.css"

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handlePhrase = (number) => {
        const peopleCount =
                number === 0
                ? `Никто с тобой не тусанет`
                : number%10 >= 2 && number%10 <= 4 && (number%100 > 20 || number%100 < 10)
                ? `${number} человека тусанет с тобой сегодня`
                : `${number} человек тусанет с тобой сегодня`;

        return (
            <h2>
                <span className={number !==0 ? 'badge bg-primary' : 'badge bg-danger'}>
                    {peopleCount}
                </span>
            </h2>
        )
    };

    /*=====================================*/
    return (
        <>
            {handlePhrase(users.length)}

            <table className="table table-striped table-hover">

                {users.length !==0 ?
                    <thead>
                    <tr>
                        {['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', '']
                            .map(i => <th scope="col" key={i}> {i} </th>)}
                    </tr>
                    </thead>
                :''}

                <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user._id}>
                            <td>{user.name}</td>

                            <td>
                                {user.qualities.map(qualitie => (
                                    <span
                                        className={`badge bg-${qualitie.color} m-1`}
                                        key={user._id+qualitie._id}
                                    >
                                        {qualitie.name}
                                    </span>)
                                )}
                            </td>

                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}/5</td>

                            <td>
                                <button
                                className="btn btn-danger"
                                onClick={()=>handleDelete(user._id)}
                                >
                                Удалить
                                </button>
                            </td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
};

export default Users;