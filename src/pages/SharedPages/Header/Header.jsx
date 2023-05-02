import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const user = ''

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
                            user && <Link className="w-10 mr-4 rounded-full ">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </Link>
                        }
                        {
                            user ? <button className='btn btn-outline' >Log Out</button> : <><Link to='/login' className="btn btn-outline">login</Link></>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;