import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-slate-800 p-2 text-slate-400 py-6'>
            <div className='my-container text-center'>
                <h2 className='text-2xl font-medium'>Follow Us On</h2>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="#"><FaFacebook className='text-xl text-blue-500' /></a>
                    <a href="#"><FaTwitter  className='text-xl text-sky-400'/></a>
                    <a href="#"><FaInstagram  className='text-xl text-orange-400'/></a>
                </div>
                <div style={{height: '1px'}} className='w-full mt-4 bg-slate-600'></div>
                <p className='font-light text-slate-400 mt-4 text-sm'>Insanely Good Recipes is a participant in the Italian Food Services LLC associates program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Italian Food.com We also participate in affiliate programs with Thrive Market, Shareasale, and other sites. We are compensated for referring traffic.</p>
                <p className='font-light text-slate-400 mt-4 text-sm'>Copyright © 2023 All Right Reserved By Italian Food Recipes</p>
            </div>
        </div>
    );
};

export default Footer;