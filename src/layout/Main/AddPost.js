import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AddPostPopup from './AddPostPopup';
const AddPost = () => {
  const [popupClose, setpopupClose] = useState(false);
  const [trigger, settrigger] = useState(false);

  const handleOpenPopup = e => {
    settrigger(true);
    setpopupClose(true);
  };
  return (
    <>
      <Row>
        <Col m='1' className='main-add_post'>
          <img
            className='main-add_post-img'
            src='https://picsum.photos/85'
            alt='User Profile'
            title='User Profile'
          />

          <div className='main-add_post-input' onClick={handleOpenPopup}>
            good morning, lets hit news...
          </div>
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
      <div className='drawer'>
        <Drawer
          style={{ backgroundColor: 'transparent ' }}
          anchor='top'
          open={popupClose}
          onClose={() => setpopupClose(false)}
        >
          <AddPostPopup
            trigger={trigger}
            setpopupClose={setpopupClose}
            settrigger={settrigger}
          />
        </Drawer>
      </div>
    </>
  );
};

export default AddPost;
