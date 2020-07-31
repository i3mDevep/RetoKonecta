import React from 'react';
import { MdHome } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const HomeNav = () => (
    <div style={{ position: 'fixed', top: 0, left: 0, padding: '20px' }}>
        <NavLink style={{ color: '#032556' }} to='/'>
            <MdHome size={50} />
        </NavLink>
    </div>
);
export default HomeNav;