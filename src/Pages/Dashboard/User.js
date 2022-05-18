import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';



const User = () => {

    const { data: users, isLoading } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    // console.log(users[0].email)

    return (
        <div>
            <h2 className='text-2xl p-2'>All User {users.length}</h2>

            <table className="table w-full text-white m-2">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow key={user._id} user={user}></UserRow>)

                    }
                </tbody>
            </table>
        </div >
    );
};

export default User;