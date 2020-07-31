import React, { useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { ScreenLoading } from '../ScreenLoading';

import HomeNav from '../HomeNav';
import './index.scss'

const SpacePost = ( { title, category, content_long, content_short, image, user, created_at, loading }) => {
    if(loading){
        return <ScreenLoading />
    }
    return (
        <Container style={{ padding: '70px' }}>
            <div>
                <HomeNav />
            </div>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <img className='image_post' src={image != null && image ? `http://127.0.0.1:8000/storage/${image}` : 'https://i0.wp.com/www.paradavisual.com/wp-content/uploads/2020/01/658774436_1280x720-1.jpg?fit=1024%2C576&ssl=1'} />
                    <section className='section_post'>
                        <h1 className='mytitle'>{ title }</h1>
                        <strong>Category: {category.title}</strong>
                        <div style={{ width: '80%', wordWrap: 'break-word' }}>
                            <p className='paragrape_post'>{ content_long }</p>
                            <strong>Author: {user.name}</strong>
                        </div>
                        <strong>Date create: {created_at}</strong>

                    </section>
                </div>
            </Container>
        </Container>
    )
}
export default SpacePost;