import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

import './header.css';

const Header = ({ scrollPosition }) => {
    const [hideHeader, setHideHeader] = useState('hide-header');

    useEffect(() => {
        setHideHeader(scrollPosition >= 500 ? '' : 'hide-header');
    }, [scrollPosition]);

    return (
        <Navbar className={'header-container ' + hideHeader} expand="lg" variant="dark" bg="black" collapseOnSelect={true}>
            <Container>
                <Nav className="mx-auto header-navbar">
                    <Nav.Item>
                        <Link className="nav-link" to="portfolio" spy={true} smooth={true} duration={0}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="about" spy={true} smooth={true} duration={0}>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="technology" spy={true} smooth={true} duration={0}>Technology</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="contact" spy={true} smooth={true} duration={0}>Contact</Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="hamburger-navbar mr-auto">
                        <Nav.Item>
                            <Nav.Link eventKey={1} as={Link} to="portfolio" spy={true} smooth={true} duration={0}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={2} as={Link} to="about" spy={true} smooth={true} duration={0}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={3} as={Link} to="technology" spy={true} smooth={true} duration={0}>Technology</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={4} as={Link} to="contact" spy={true} smooth={true} duration={0}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;