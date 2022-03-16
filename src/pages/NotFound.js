import React from 'react';
import notFound from '../assets/47ae8417ee638d039a4b7300439ea061.gif';
import { Col, Row } from 'react-bootstrap';
import '../sass/NotFound.scss';

function NotFound() {
  return (
    <Row className='justify-content-center align-items-center'>
      <Col xl='auto' className='mt-5'>
        <img className='not-found' src={notFound} alt='not found page' />
      </Col>
    </Row>
  );
}

export default NotFound;
