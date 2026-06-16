import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/ShopContext'
import { useContext } from 'react';


const Login = () => {
    const { setIsLoggedIn } = useContext(Context);
    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        email: "",
        password: ""
    })

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await fetch(
            "http://localhost:3000/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            }
        );

        const data = await response.json();

       console.log("Login Response:", data);
       console.log("Response OK:", response.ok);

        if (response.ok) {

    setIsLoggedIn(true);

    alert(data.message);

    navigate("/");

} else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

    }
};
    return (
        <div className='min-h-[90vh] flex flex-col items-center justify-center'>

            <form
                onSubmit={handlesubmit}
                className='flex flex-col items-center justify-center bg-cyan-400 h-[400px] w-[400px] rounded-2xl border-2'
            >

                <input
                    type="email"
                    name="email"
                    placeholder='email'
                    className='border-2'
                    onChange={handlechange}
                />

                <br />

                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    className='border-2'
                    onChange={handlechange}
                />

                <br />

                <button className='rounded-[10px] border-2 w-[7vw] bg-gray-900 text-white'>
                    Login
                </button>
            </form>

        </div>
    )
}

export default Login
