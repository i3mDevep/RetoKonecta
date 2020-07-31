import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import { Button } from 'react-bootstrap';

import './index.scss';

const IMG_ARTICLE = "https://i0.wp.com/www.paradavisual.com/wp-content/uploads/2020/01/658774436_1280x720-1.jpg?fit=1024%2C576&ssl=1";

const CardArticle = ({ id, deleteArticle, image, title, content_short, category }) => {
    return (
        <div className='post-card'>
            <Link to={`/post/${id}`}>
                <img src={image != null && image ? `http://127.0.0.1:8000/storage/${image}` : IMG_ARTICLE} />
            </Link>
            <h3>{title}</h3>
            <div className='excerpt'>
                <p>{content_short}</p>
            </div>
            <div className='meta'>
                <p>Category: <strong>{category.title}</strong></p>
                <div className='ml-auto' >
                    <Button onClick={() => deleteArticle(id)} style={{ backgroundColor: 'red' }}><MdCancel /></Button>
                </div>
            </div>
        </div>
    );
}
export default CardArticle;