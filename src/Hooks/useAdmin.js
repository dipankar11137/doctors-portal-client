import { useEffect, useState } from "react";


const useAdmin = user => {

    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(req => req.json())
            .then(data => {
                setAdmin(data.admin);
            })

    }, [user])

    return [admin]
};

export default useAdmin;
// useEffect(() => {
//     const email = user?.email;
//     if (email) {
//         fetch(`http://localhost:5000/admin/${email}`, {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setAdmin(data.admin);
//                 setAdminLoading(false);
//             })
//     }
// }, [user])

// return [admin, adminLoading]
// }

// export default useAdmin;