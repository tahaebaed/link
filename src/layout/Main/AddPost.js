import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const AddPost = () => {
  return (
    <Row>
      <Col m='1' className='main-add_post'>
        <img
          className='main-add_post-img'
          src='https://picsum.photos/100'
          alt='User Profile'
          title='User Profile'
        />
        <input
          className='main-add_post-input'
          type='text'
          placeholder='good morning, lets hit news...'
        />
        <Button variant='text' className='main-add_post-button'>
          <i className='bi bi-images' /> Add Photo
        </Button>
        <Button variant='text' className='main-add_post-button ms-0'>
          <i class='bi bi-camera-video'></i> Add Video
        </Button>
        <Button variant='text' className='main-add_post-button ms-0'>
          <i class='bi bi-calendar-event'></i> Add Event
        </Button>
      </Col>
    </Row>
  );
};

export default AddPost;
