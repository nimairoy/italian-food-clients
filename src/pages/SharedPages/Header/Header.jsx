import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io'

const Header = () => {
    const [open, setOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    //handle logout
    const handleLogOut = () => {
        logOut()
            .then(result => toast('user logout successfully', { position: 'top-center' }))
            .catch(error => console.log(error))
    }

    return (
        <div className=" py-1 bg-base-100 drop-shadow-xl">
            <div className="my-container navbar">
                <div className="navbar-start">
                    <Link to='/' className="text-2xl md:text-3xl font-bold uppercase p-2 text-primary grow">Italian Food</Link>
                </div>

                {/* // mobile menu icons responsive */}
                <div onClick={() => setOpen(!open)} className='visible  ml-auto md:hidden'>
                    <span>
                        {open === true ?
                            <IoMdClose className='text-2xl cursor-pointer'></IoMdClose> :
                            <FaBars className='text-2xl cursor-pointer'></FaBars>
                        }
                    </span>

                </div>

                <div className="navbar-center md:ml-auto lg:flex">

                    <ul className={`menu md:menu-horizontal absolute z-50 top-20 bg-lime-200 md:bg-transparent px-8 py-6 md:px-2 rounded-md md:rounded-none md:py-0 md:static md:flex gap-4 items-center duration-500 font-semibold ${open ? 'left-4' : '-left-96' }`}>
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