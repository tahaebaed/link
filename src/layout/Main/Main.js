import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AddPost from './AddPost';

const Main = () => {
  return (
    <Col xl='7' className='main'>
      <AddPost />
      <div className='main-posts'>
        <div className='main-posts_post'>
          <div className='main-posts_post-info'>user info</div>
          <div className='main-posts_post-content'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            quos placeat enim incidunt ipsa ab atque nesciunt dignissimos fuga
            exercitationem dolorem expedita ex, minima officiis delectus quaerat
            repellat suscipit sapiente!{' '}
          </div>
          <img
            className='main-posts_post-img'
            src='https://picsum.photos/480'
            alt=''
          />
          <Row className='main-posts_post-Reaction'>
            <Col xl='2'>
              <Button variant='text-primary'>
                <i class='bi bi-hand-thumbs-up'></i> Like
              </Button>
            </Col>
            <Col xl='3'>
              <Button variant='text-primary'>Comment</Button>
            </Col>
            <Col xl='2'>
              <Button variant='text-primary'>Share</Button>
            </Col>
          </Row>
        </div>
        <div className='main-posts_post'>
          <div className='main-posts_post-info'>user info</div>
          <div className='main-posts_post-content'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            quos placeat enim incidunt ipsa ab atque nesciunt dignissimos fuga
            exercitationem dolorem expedita ex, minima officiis delectus quaerat
            repellat suscipit sapiente!{' '}
          </div>
          <img
            className='main-posts_post-img'
            src='https://picsum.photos/480'
            alt=''
          />
          <Row className='main-posts_post-Reaction'>
            <Col xl='2'>
              <Button variant='text-primary'>
                <i class='bi bi-hand-thumbs-up'></i> Like
              </Button>
            </Col>
            <Col xl='3'>
              <Button variant='text-primary'>Comment</Button>
            </Col>
            <Col xl='2'>
              <Button variant='text-primary'>Share</Button>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Main;
