import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    //handle logout
    const handleLogOut = () => {
        logOut()
        .then(result => toast('user logout successfully', {position: 'top-center'}))
        .catch(error => console.log(error))
    }

    return (
        <div className=" py-1 bg-base-100 drop-shadow-xl">
            <div className="my-container navbar">
                <div className="navbar-start">
                    <Link to='/' className="text-3xl font-bold uppercase text-primary">Italian Food</Link>
                </div>
                <div className="navbar-center ml-auto hidden lg:flex">
                    <ul className="menu menu-horizontal flex items-center font-semibold px-1">
                        <Link to='/' className='ml-8'>Home</Link>
                        <Link to='/blog' className='mx-8'>Blog</Link>
                        {
                            user && <Link className="w-10 mr-4 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />                                
                            </Link>
                        }
                        <span className='mr-4'>{user?.displayName}</span>
                        {
                            user ? <button onClick={handleLogOut}>Log Out</button> : <><Link to='/login'>Login</Link></>
                        }
                        <Link to='/register' className='mx-8'>Sign up</Link>
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;