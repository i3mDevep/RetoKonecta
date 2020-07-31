import React from 'react';
import { Form, Button, Card, InputGroup, Col, Alert } from 'react-bootstrap';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { IoIosKey } from 'react-icons/io';
import { CardResponsive, ControlForm, ContainerForm } from './style';
import useInputValue from '../../hooks/useInputValue';

const SignUp = ({ onSubmit, loading, error }) => {

  const name = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');
  const chellphone = useInputValue('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
      name: name.value,
      cellphone: chellphone.value,
      role: false,
    });
  };

  return (
    <ContainerForm
      className='w-100'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='text-white p-1'>
        <small>Create your account</small>
      </h1>
      <CardResponsive>
        <Card.Body>
          <Form disabled={loading} onSubmit={handlerSubmit}>
              <div className='text-center'>
                 <img className='w-25' src='https://cdn4.iconfinder.com/data/icons/flatastic-3/256/sign_up-256.png'/>
              </div>
            <Form.Group controlId='formCompany'>
              <Form.Label>Name</Form.Label>
              <ControlForm
                placeholder='Name'
                disabled={loading}
                type='text'
                required={true}
                placeholder='your name'
                {...name}
              />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id='basic-addon1'>
                    <BsFillEnvelopeFill />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <ControlForm
                  disabled={loading}
                  required={true}
                  type='email'
                  {...email}
                  placeholder='Email'
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id='basic-addon1'>
                    <IoIosKey />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <ControlForm
                  disabled={loading}
                  type='password'
                  required={true}
                  placeholder='Password'
                  {...password}

                />
              </InputGroup>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group controlId='formTelphone'>
                  <Form.Label>Celphone</Form.Label>
                  <ControlForm
                    disabled={loading}
                    type='tel'
                    required={true}
                    placeholder='Numero'
                    {...chellphone}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            { error && (
              <Alert variant='danger'>
                <small>{error}</small>
              </Alert>
            )}
            <div className='text-center'>
              <Button
                type='submit'
                style={{
                  borderRadius: '20px',
                  width: '80%',
                  backgroundColor: '#18b0b0'
                }}
                disabled={loading}
                onClick={!loading ? handlerSubmit : null}
              >
                {loading ? 'saving...' : 'Sign up'}
              </Button>
            </div>

          </Form>
        </Card.Body>
      </CardResponsive>
    </ContainerForm>
  );

};

export default SignUp;

