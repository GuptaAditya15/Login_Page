import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import gym from '../assets/gym.png'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Hash Pasword is created
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        console.log('Hashed Password:', hashedPassword);
    };

    return (
        <>
            <div className='h-screen' style={{ backgroundImage: `url(${gym})`, backgroundSize: 'cover' }}>
                
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <h2 className="mt-10 text-center text-5xl font-bold  text-white">Login to your Gym account</h2>


                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-1xl font-medium text-white">Email address</label>
                                <div className="mt-2">
                                    <input className="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset " id="email" name="email" type="email" autoComplete="email" required onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-1xl font-medium leading-6 text-white">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-white hover:text-yellow-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input className="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset " id="password" name="password" type="password" autoComplete="current-password" required onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-2xl font-bold hover:bg-indigo-900">Login</button>
                            </div>
                        </form>

                        <p className="mt-7 text-center text-sm text-white">
                            Don't have an account?
                            <a href="#" className="font-bold leading-6 px-1 text-white hover:text-white">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
