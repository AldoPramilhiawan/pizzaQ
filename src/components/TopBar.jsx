import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {MdLocalOffer} from "react-icons/md"

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &bnsp;&bnsp; About Home delivery on order Above 5000/- Rupiah
          </h6>
          <nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy">
              <Nav.Link>terms and policy</Nav.Link>
            </LinkContainer>
          </nav>
        </Container>
      </Navbar>
    </>
  );
};
export default TopBar;
