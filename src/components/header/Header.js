import React, { useContext } from 'react'
import '../../pages/home/home.css';
import '../../App.css';

import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark">
      <Container>
        <div className="nav-bar">
        </div>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;
