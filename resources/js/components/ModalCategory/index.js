import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { LoopCircleLoading } from 'react-loadingg';
import useInputValue from '../../hooks/useInputValue';

const ModalCategory = ({ onSubmit, init, loading = false, ...rest }) => {

  const [picture, setPicture] = useState('');
  const title = useInputValue('');

  const onSelectImageHandler = (e) => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      setPicture(e.target.result);
    }
  }

  const uploadAction = () => {
    var imagedata = document.querySelector('input[type="file"]').files[0];
    onSubmit(imagedata, title)
  }

  return (
    <Modal
      {...rest}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Row>
            <Col md='3'>
              <FiEdit size='30' colot='red' />
            </Col>
            <Col>
              <input type="text" name="title" {...title} className="form-control" placeholder='Name category' />
            </Col>
          </Row>
        </Modal.Title>
        {
          loading && (
            <div style={{ zIndex: '1000' }}>
              <LoopCircleLoading />
            </div>
          )
        }

      </Modal.Header>
      <Modal.Body>
        <Row>
          <div className='m-3'>
            <img style={{ width: '50px', objectFit: 'cover', borderRadius: '150px' }} src={picture || 'https://cdn4.iconfinder.com/data/icons/ios-web-user-interface-multi-circle-flat-vol-2/512/Attribute_category_label_shop_price_price_tag_tag-256.png'} />
          </div>
          <form style={{ display: 'flex', alignItems: 'center' }} encType="multipart/form-data" >
            <input type="file" name="fileName" onChange={(e) => onSelectImageHandler(e)} />
            <Button onClick={uploadAction} >Create</Button>
          </form>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCategory;
