import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

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
                    <ul className="menu menu-horizontal flex gap-4 items-center font-semibold px-1">
                        <ActiveLink to='/' >Home</ActiveLink>
                        <ActiveLink to='/blog' >Blog</ActiveLink>
                        {
                            user && <Link className="w-10 mr-4 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />                                
                            </Link>
                        }
                        <span className='mr-4'>{user?.displayName}</span>
                        {
                            user ? <button onClick={handleLogOut}>Log Out</button> : <><ActiveLink to='/login'>Login</ActiveLink></>
                        }
                        <ActiveLink to='/register'>Sign up</ActiveLink>
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;