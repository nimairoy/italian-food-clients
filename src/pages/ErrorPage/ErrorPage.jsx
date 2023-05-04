import React from 'react';
import error from '../../assets/errorpage.jpg';

const ErrorPage = () => {
    return (
        <div style={{height: '420px'}} className='error-page relative w-full'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;