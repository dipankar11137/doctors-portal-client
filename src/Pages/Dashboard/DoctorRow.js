import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty, email } = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor : ${name} is Deleted Successfully .`)
                    refetch();
                }
            })
    }

    return (<tr>
        <th>{index + 1}</th>
        <td><div class="avatar">
            <div class="w-16 mask mask-hexagon">
                <img src={img} alt={name} />
            </div>
        </div>
        </td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-error'>Delete</button></td>
    </tr>
    );
};

export default DoctorRow;