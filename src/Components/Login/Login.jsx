import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
    }
    return (

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>yout have not accolunt? <Link className='text-blue-500' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;