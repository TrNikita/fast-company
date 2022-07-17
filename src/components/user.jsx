import React from 'react';
import Quality from './quality';
import Bookmark from './bookmark';

const User = ({user, ...rest}) => {
    return (
        <>
            {user.map((user) => (
                <tr key={user._id}>
                    <td>{user.name}</td>

                    <td>
                        <Quality user={user}/>
                    </td>

                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>

                    <td>
                        <button
                            className="border border-dark"
                            onClick={() => rest.onBookmark(user._id)}
                        >
                            <Bookmark
                                bookmark={user.bookmark}
                            />
                        </button>
                    </td>

                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => rest.onDelete(user._id)}
                        >
                            Удалить
                        </button>
                    </td>
                </tr>
            ))
            }
        </>
    );
};

export default User;