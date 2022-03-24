import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

const SideRight = () => {
  const [toggle, setToggle] = useState(false);
  const isToggled = toggle ? 'toggled' : 'toggle';
  return (
    <Col xl='2' className='side_menu_right'>
      <div className={`side_menu_right-${isToggled}`}>
        <div
          onClick={() => setToggle(c => (c = !c))}
          className={`side_menu_right-${isToggled}_handler d-flex align-items-center`}
        >
          <img
            src='https://picsum.photos/25'
            alt=''
            style={{ margin: '0 8px 0 0', borderRadius: '6px' }}
          />
          Conenct To Linkers
        </div>
      </div>
      <ul className='side_menu_right'>
        {/* <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_right-item d-flex align-items-center'>
          <img
            className='side_menu_right-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_right-item_profile' href='/'>
            user name profle
          </a>
        </li> */}
      </ul>
    </Col>
  );
};

export default SideRight;
