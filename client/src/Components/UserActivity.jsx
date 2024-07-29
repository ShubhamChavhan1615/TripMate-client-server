import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUserActivity } from '../Services'

const UserActivity = () => {
    const [userActivity, setUserActivity] = useState([])
    const [imgUrls, setImgUrls] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        const getUserActivities = async () => {
            const authToken = localStorage.getItem("authToken")
            const response = await axios.get(getUserActivity, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            })
            setUserActivity(response.data.userTripsActivity)
            setImgUrls(response.data.tripDetails)

            const total = response.data.userTripsActivity.reduce((sum, activity) => sum + activity.amount, 0)
            setTotalAmount(total)
            console.log(response.data)
        }
        getUserActivities()
    }, [])

    return (
        <div className="p-6 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">User Activity</h2>
            <div className="text-xl text-gray-600 mb-4">Total Amount Spent: ₹{totalAmount}</div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {userActivity.map((activity, i) => (
                    <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <img src={imgUrls[i]?.thumbnail} alt={activity.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold text-white">{activity.name}</h3>
                        <p className="text-gray-400">{new Date(activity.dateTime).toLocaleString()}</p>
                        <p className="text-gray-300">{activity.location}</p>
                        <p className="text-gray-200 mt-2">{activity.description}</p>
                        <p className="text-gray-200 mt-2">Amount: ₹{activity.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserActivity
