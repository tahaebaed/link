import React from 'react';
import { Row } from 'react-bootstrap';

const AddPost = () => {
  return (
    <Row>
      <div className='main-add_post'>
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
        <p>
          <i class='bi bi-images' /> Add Photo
        </p>
      </div>
    </Row>
  );
};

export default AddPost;
