import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div >
            Dashboard layout
            <div className='bg-green-400 p-6'>
                {children}
            </div>
            <footer>
                Dashboard footer
            </footer>
        </div>
    );
};

export default DashboardLayout;