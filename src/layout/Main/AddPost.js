import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

import AddPostPopup from './AddPostPopup';
const AddPost = () => {
  const [popupClose, setpopupClose] = useState(false);
  const [trigger, settrigger] = useState(false);

  const handleOpenPopup = (e) => {
    settrigger(true);
    setpopupClose(true);

  };
  return (
    <>
      <Row>
        <div className='main-add_post'>
          <img
            className='main-add_post-img'
            src='https://picsum.photos/100'
            alt='User Profile'
            title='User Profile'
          />
          {/* <input
            className='main-add_post-input'
            type='text'
            placeholder='good morning, lets hit news...'
            disabled

          /> */}
          <div className='main-add_post-input' onClick={handleOpenPopup}>
            good morning, lets hit news...
          </div>
          <p>
            <i className='bi bi-images' /> Add Photo
          </p>
        </div>
      </Row>
      <div className="drawer">
        <Drawer
          style={{ backgroundColor: "transparent " }}
          anchor="top"
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
