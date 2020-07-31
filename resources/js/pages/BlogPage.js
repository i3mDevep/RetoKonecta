import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import ListCardArticlesContainer from '../containers/ListCardArticlesContainer';
import Header from '../components/HeaderSignIn';
import ModalCategoryContainer from '../containers/ModalCategoryContainer';

const BlogPage = () => {
    const [showModalCategory, setModalCategory] = useState(false);
    return (
        <Container>
            <ModalCategoryContainer updateFeth={() => setModalCategory(false)} show={showModalCategory} onHide={() => setModalCategory(false)} />
            <Header onClickNewCategory={() => setModalCategory(true)} />
            <ListCardArticlesContainer />
        </Container>
    )
}
export default BlogPage;