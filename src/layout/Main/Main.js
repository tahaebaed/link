import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AddPost from './AddPost';

const Main = () => {
  return (
    <Col xl='6' className='main'>
      <AddPost />
      <div className='main-posts'>
        <div className='main-posts_post'>
          <Row className='main-posts_post-info'>
            <Col className='p-0'>
              <div className='d-flex align-items-center '>
                <img
                  className='main-posts_post-info_img'
                  src='https://picsum.photos/50'
                  alt='User Profile'
                  title='User Profile'
                />
                <div>
                  <h6 className='main-posts_post-info_title'>user profile</h6>
                  <p className='main-posts_post-info_time'>1 hour ago</p>
                </div>
              </div>
            </Col>
            <Col className='text-end main-posts_post-info_dropdown '>
              <Button variant='text' className='main-posts_post-info_dropdown'>
                <i class='bi bi-circle-fill me-1' />
                <i class='bi bi-circle-fill me-1' />
                <i class='bi bi-circle-fill ' />
              </Button>
            </Col>
          </Row>
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
          <Row className='main-posts_post-Reaction justify-content-sm-center justify-content-lg-start'>
            <Col className='text-center'>
              <Button variant='text-primary'>

                 <i className='bi bi-hand-thumbs-up mt-2 me-1'></i> Like

              </Button>
            </Col>
            <Col className='text-center'>
              <Button variant='text-primary'>
                <i class='bi bi-chat-left-quote mt-2 me-1'></i> Comment
              </Button>
            </Col>
            <Col className='text-center'>
              <Button variant='text-primary'>
                <i class='bi bi-share mt-2 me-1'></i>Share
              </Button>
            </Col>
          </Row>
        </div>
        <div className='main-posts_post'>
          <Row className='main-posts_post-info'>
            <Col className='p-0'>
              <div className='d-flex align-items-center '>
                <img
                  className='main-posts_post-info_img'
                  src='https://picsum.photos/50'
                  alt='User Profile'
                  title='User Profile'
                />
                <div>
                  <h6 className='main-posts_post-info_title'>user profile</h6>
                  <p className='main-posts_post-info_time'>1 hour ago</p>
                </div>
              </div>
            </Col>
            <Col className='text-end '>
              <Button variant='text' className='main-posts_post-info_dropdown '>
                <i class='bi bi-circle-fill me-1' />
                <i class='bi bi-circle-fill me-1' />
                <i class='bi bi-circle-fill ' />
              </Button>
            </Col>
          </Row>
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
            <Col className='text-center'>
              <Button variant='text-primary'>

                     <i className='bi bi-hand-thumbs-up mt-2 me-1'></i> Like

              </Button>
            </Col>
            <Col className='text-center'>
              <Button variant='text-primary'>
                <i class='bi bi-chat-left-quote mt-2 me-1'></i> Comment
              </Button>
            </Col>
            <Col className='text-center'>
              <Button variant='text-primary'>
                <i class='bi bi-share mt-2 me-1'></i>Share
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Main;
