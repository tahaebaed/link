import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/context/AuthContext';

// import { auth } from '../store/context/FireContext'; // * if we will uncomment it
import { Row } from 'react-bootstrap';
import SideLeft from '../layout/Main/SideLeft';
import Main from '../layout/Main/Main';
import '../sass/homePage.scss';
import SideRight from '../layout/Main/SideRight';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return user ? (
    <>
      <section className='home__page'>
        <Row>
          <SideLeft />
          <Main />
          <SideRight />
        </Row>
      </section>
    </>
  ) : (
    (setTimeout(() => navigate('/signIn')), 3000)
  );
};

export default Home;
