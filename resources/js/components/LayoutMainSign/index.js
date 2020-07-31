import React from 'react';
import Header from './Header/Header';
import Footer from './Foother/Footer';
import './index.scss';

const LayoutMainSign = ({ children }) => {
    return(
    <div className='layout'>
        <Header />
        {
            children
        }
        <Footer />
    </div>
    )
}
export default LayoutMainSign;