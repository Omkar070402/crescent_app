import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [data, setData] = useState(null)

    const token = localStorage.getItem('token')

    const getDetail = async () => {
        try {

            const response = await axios.get(
                "http://localhost:4000/api/user/get",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setData(response.data.user)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getDetail()
    }, [])



    return (
        <div>

            <section>
                <div className='bg-indigo-600 flex justify-between p-5'>

                    <div>
                        <h1 className='font-bold text-white text-[20px]'>Dashboard</h1>
                    </div>

                    <div className='me-5 text-white'>
                        <Link to={'/'}><HiOutlineHome size={25} /></Link>
                    </div>
                </div>


                <div>
                    <div className='text-center'>
                        <h2 className='text-[25px] text-indigo-600 font-bold mt-5'>Account Details :</h2>
                    </div>
                    <table className="border-collapse border border-gray-400 w-full mt-4 ">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">ID</th>
                                <th className="border border-gray-400 px-4 py-2">First Name</th>
                                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                                <th className="border border-gray-400 px-4 py-2">Email</th>
                                <th className="border border-gray-400 px-4 py-2">Mobile</th>
                                <th className="border border-gray-400 px-4 py-2">DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) && data.map((user) => (
                                <tr key={user.id} className='text-center text-[13px]'>
                                    <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.first_name}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.last_name}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.mobile}</td>
                                    <td className="border border-gray-400 px-4 py-2">{new Date(user.dob).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </section>




        </div>
    )
}

export default Dashboard
