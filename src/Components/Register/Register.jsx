import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase.init';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })


    }

    return (
         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name='name' />

                    <label className="label">Photo</label>
                    <input type="text" className="input" placeholder="Photo" name='photo' />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>you have an accolunt? <Link className='text-blue-500' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;