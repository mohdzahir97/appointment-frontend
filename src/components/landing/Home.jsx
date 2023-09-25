import React, { useEffect } from 'react'
import Header from '../layout/Header'
import axios from 'axios'
const Home = () => {

    const getData = async () => {

        const res = await axios.get("https://appointment-backend.onrender.com/api/v1")
        console.log(res.data);
    }

    useEffect(() => {
         getData()
    }, [])

    return (
        <div className='container mt-5'>
            <h5>
                Welcome to Appoint, your go-to appointment management solution.
                Say goodbye to the hassle of scheduling meetings,
                booking appointments, and managing your busy calendar. With Appoint, you can effortlessly streamline your daily routine, whether you're a business professional, healthcare provider, or simply someone looking to simplify your life. Our user-friendly platform empowers you to set up, track, and organize appointments with ease. Say goodbye to double bookings and missed meetings, as our smart scheduling algorithms ensure optimal time management. Plus, Appoint offers seamless integration with your favorite calendar apps, making it the ultimate tool for optimizing your time. Experience the future of appointment management – start using Appoint today! </h5>
        </div>
    )
}

export default Home
