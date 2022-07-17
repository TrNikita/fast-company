import React, { useState } from 'react';
import API from './api';
import Users from './components/users';
import SearchStatus from './components/searchStatus';

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookmark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) user.bookmark = !user.bookmark;
                return user;
            }),
        );
    };

    return (
        <>
            <SearchStatus
                length={users.length}
            />

            <Users
                users={users}
                onDelete={handleDelete}
                onBookmark={handleToggleBookmark}
            />
        </>
    );
}

export default App;