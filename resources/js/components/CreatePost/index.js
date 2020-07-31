import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Col, Card, Button, Row, Container } from 'react-bootstrap';

import HomeNav from '../HomeNav';

import useInputValue from '../../hooks/useInputValue';


const CreatePost = ({ blocked = false, categories = [], onSubmit }) => {

  const Title = useInputValue('');
  const Resum = useInputValue('');
  const Description = useInputValue('');


  const [category, setCategory] = useState({ name: '', id: '' });
  const [picture, setPicture] = useState('');

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    onSubmit({
      category_id: parseInt(category.id),
      title: Title.value,
      content_short: Resum.value,
      content_long: Description.value,
      image: imagedata
    })
  };

  const onSelectImageHandler = (e) => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      setPicture(e.target.result);
    }

  }
  return (
    <>
      <Container style={{ marginTop: '20px' }}>
        <div>
          <HomeNav />
        </div>
        <Row>
          <Col sm={12} md={4} style={{ backgroundColor: 'white', padding: '25px', marginBottom: '10px' }}>
            <Form disabled={blocked} id='CreateForm' onSubmit={handlerOnSubmit} encType="multipart/form-data">
              <Form.Group >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as='select'
                  value={category.value}
                  onChange={(e) => {
                    const index = e.target.selectedIndex;
                    setCategory({ value: e.target.value, id: e.target.options[index].id });
                  }}
                  disabled={blocked}
                >
                  <option>Select one category</option>
                  {
                    categories.map((category) => <option id={category.id} key={`id-${category.id}`}>{category.title}</option>)
                  }
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Group>
                  <Form.File id="exampleFormControlFile1" label='Select image' onChange={(e) => onSelectImageHandler(e)} />
                </Form.Group>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    placeholder='title of post'
                    {...Title}
                    required
                    disabled={blocked}
                  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label>Resum</Form.Label>
                  <Form.Control
                    placeholder='text short'
                    {...Resum}
                    required
                    disabled={blocked}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group as={Col} >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="8"
                  {...Description}
                  required
                />
              </Form.Group>
              <Card.Body className='m-auto'>
                <Button
                  variant='primary'
                  type='submit'
                  form='CreateForm'
                  className='mr-2'
                  disabled={blocked}
                >
                  Create Post
            </Button>
              </Card.Body>
            </Form>
          </Col>
          <Col sm={12} md={7} style={{ backgroundColor: 'white', margin: '0 auto' }}>
            <Card.Body className='text-center w-100'>
              <img className='w-75' style={{ objectFit: 'cover' }} src={picture} />
            </Card.Body>
            <Card.Body>
              <div style={{ margin: '0 auto', width: '80%' }}>
                <h1>{Title.value}</h1>
                <strong>{category.value}</strong>
              </div>
              <div style={{ margin: '0 auto', width: '80%', wordWrap: 'break-word' }}>
                <p>{Description.value}</p>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateProps = (state) => {
  return {
    categories: state.resultAddCategories.categories
  };
};
export default connect(mapStateProps, null)(CreatePost);

