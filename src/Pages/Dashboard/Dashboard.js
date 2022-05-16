import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-4xl text-purple-500 font-bold text-center'>Welcome to Our DashBoard</h2>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/review">My Review</Link></li>
                        <li><Link to="/dashboard/history">History</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;