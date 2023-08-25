import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearch, BiX } from 'react-icons/bi';

function Nav() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#">
          <img src="https://news.mgmotor.eu/wp-content/themes/wp-theme-mg/src/img/mg-logo.svg" alt="MG Motor Logo"  height="30px" width="25px"/>
        </Navbar.Brand>
        <Navbar className="text-white" href="#">
          Media & MG Life
        </Navbar>
        <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav" className= {isNavbarOpen ? 'show' : ''} >
          {/* Navigation links go here */}
          <Navbar className="text-white m-3" href="#">
            <b>Home</b>
          </Navbar>
          <Navbar  className="text-white m-3 " href="#">
            <b>Blog</b>
          </Navbar>
          <Navbar className="text-white m-3" href="#">
            <b>Press releases</b>
          </Navbar>
          <Navbar className="text-white m-3" href="#">
            <b>Image bank</b>
          </Navbar>
          <Navbar className="text-white m-3" href="#">
            <b>MG Motor</b>
          </Navbar>
          <Navbar href="#">
            <button type="button" className="btn btn-dark">
              Search <BiSearch />
            </button>
          </Navbar>
        </Navbar.Collapse>

        {/* Always visible links */}
        
        <Navbar className="text-white" href="#">
           Europe HQ
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Nav;
