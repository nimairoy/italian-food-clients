import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center my-24">
            <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;