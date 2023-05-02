import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='my-container pb-16 pt-12'>
                <div className="w-1/2 mx-auto border rounded-md shadow-xl py-12 px-4 border-indigo-100">
                    <h4 className='text-3xl font-semibold text-center mb-4'>Create a New Account</h4>
                    <form className='pb-6 text-center'>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full border border-indigo-200 my-4" />
                        <input name="email" type="email" placeholder="Your Email" className="input w-full border border-indigo-200 my-4" />
                        <input name="photo" type="text" placeholder="Photo URL" className="input w-full border border-indigo-200 my-4" />
                        <input name="password" type="password" placeholder="Your Password" className="input mt-4 w-full border border-indigo-200" />
                        <div className="form-control">
                            <label className="label cursor-pointer mt-6">
                                <div className='flex items-center'>
                                    <input type="checkbox" name='login-check' className="checkbox checkbox-primary" />
                                    <span className="label-text ml-2 font-semibold">Accept All Terms and Conditions</span>
                                </div>
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary w-full rounded-none mt-4'>Sign Up</button>
                    </form>
                    <p className='text-center'>Already have an account ? <Link to='/login' className='text-primary font-semibold underline'>Login</Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <li className='list-none cursor-pointer flex items-center border border-indigo-300 rounded-3xl p-3 justify-center my-2'><FaGithub className='text-primary text-2xl mr-4'></FaGithub> Continue with Github</li>
                        <li className='list-none cursor-pointer flex items-center border border-indigo-300 rounded-3xl p-3 justify-center my-2'><FaGoogle className='text-warning text-2xl mr-4'></FaGoogle> Continue with Google</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;