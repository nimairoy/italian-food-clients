import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 container shadow-neutral-100">
            <div className="navbar-start">
                <Link to='/' className="text-3xl font-bold">Italian Food</Link>
            </div>
            <div className="navbar-center ml-auto hidden lg:flex">
                <ul className="menu menu-horizontal flex items-center font-semibold px-1">
                    <Link to='/' className='ml-8'><a>Home</a></Link>
                    <Link to='/blog' className='ml-8'><a>Blog</a></Link>
                    <Link className="w-10 ml-8 rounded-full ">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </Link>
                    <Link to='/login' className="btn btn-outline">login</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;