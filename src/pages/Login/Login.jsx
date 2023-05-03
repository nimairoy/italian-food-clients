import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('')
    const [check, setCheck] = useState(false);

    const { logInUser } = useContext(AuthContext);

    // handle login 
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(form, email, password)
        logInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast('User Login Successfully', {position: 'top-center'});
            form.reset();
            setError('');
        })
        .catch(err => {
            setError(err.message)
        })

    }

    // handle remember me 
    const handleChecked = event => {
        setCheck(event.target.checked)
    }

    return (
        <div className='my-container pb-16 pt-12'>
            <div className="w-1/2 mx-auto border rounded-md shadow-xl py-12 px-4 border-indigo-100">
                <h4 className='text-3xl font-semibold text-center mb-4'>Please Login</h4>
                <form onSubmit={handleLogIn} className='pb-6 text-center'>
                    <input name="email" required type="email" placeholder="Your Email" className="input w-full border border-indigo-200 my-4" />
                    <input name="password" required type="password" placeholder="Your Password" className="input mt-4 w-full border border-indigo-200" />
                    <div className="form-control">
                        <label className="label cursor-pointer mt-6">
                            <div className='flex items-center'>
                                <input onClick={handleChecked} type="checkbox" name='login-check' className="checkbox checkbox-primary" />
                                <span className="label-text ml-2 font-semibold">Remember me</span>
                            </div>
                            <Link className='underline text-primary font-semibold'>Forget Password</Link>
                        </label>
                    </div>
                    <button type='submit' disabled={!check} className='btn btn-primary w-full rounded-none mt-4'>login</button>
                    <p className='text-red-600 mt-4'>{error}</p>
                </form>
                <p className='text-center'>Don't have an account ? <Link to='/register' className='text-primary font-semibold underline'>Create an account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <ToastContainer />
                    <li className='list-none cursor-pointer flex items-center border border-indigo-300 rounded-3xl p-3 justify-center my-2'><FaGithub className='text-primary text-2xl mr-4'></FaGithub> Continue with Github</li>
                    <li className='list-none cursor-pointer flex items-center border border-indigo-300 rounded-3xl p-3 justify-center my-2'><FaGoogle className='text-warning text-2xl mr-4'></FaGoogle> Continue with Google</li>
                </div>
            </div>
        </div>
    );
};

export default Login;