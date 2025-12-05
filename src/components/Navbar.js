'use client'; 

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" passHref legacyBehavior> 
          <Navbar.Brand>💰 Gerenciador Financeiro</Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link href="/" passHref legacyBehavior>
              <Nav.Link as="a">Visão Geral</Nav.Link>
            </Link>
            
            <Link href="/transactions" passHref legacyBehavior>
              <Nav.Link as="a">Transações</Nav.Link>
            </Link>
            
            <Link href="/reports" passHref legacyBehavior>
              <Nav.Link as="a">Relatórios</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;