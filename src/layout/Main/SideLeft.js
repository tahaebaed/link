import React from 'react';
import { Col } from 'react-bootstrap';

const SideLeft = () => {
  return (
    <Col xl='3'>
      <ul className='side_menu_left'>
        <li className='side_menu_left_item d-flex align-items-center'>
          <img
            className='side_menu_left-item_img'
            src='https://picsum.photos/28'
            alt='User Profile'
            title='User Profile'
          />
          <a className='side_menu_left-item_profile' href='/'>
            user name profle
          </a>
        </li>
        <li className='side_menu_left-item d-flex align-items-center'>
          <i class='bi bi-person-lines-fill' />
          <a href='/'>Linkers</a>
        </li>
        <li className='side_menu_left-item d-flex align-items-center'>
          <i class='bi bi-person-lines-fill' />
          <a href='/'>Pages</a>
        </li>
        <li className='side_menu_left-item d-flex align-items-center'>
          <i class='bi bi-person-lines-fill' />
          <a href='/'>Groups</a>
        </li>
      </ul>
    </Col>
  );
};

export default SideLeft;
