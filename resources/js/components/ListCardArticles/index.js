import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import CardArticle from '../CardArticle';

const ListCardArticles = ( { articles = [], deleteArticle, idFilter } ) => {
    if(!articles){
        return "waiting articles...."
    }
    console.log(idFilter)
    return (
        <Row>

            {
                articles.map((post) =>
                    <Col md='4' key={post.id}>
                        <CardArticle deleteArticle={deleteArticle} {...post}/>
                    </Col>
                )
            }
        </Row>
    );
};
const mapStateProps = (state) => {
    return {
        articles: state.articlesReducer.articles,
    };
  };
export default connect(mapStateProps, null)(ListCardArticles);