'use client'; 

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link'; 

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Link href="/" passHref asChild>
          <Navbar.Brand>💰 Gerenciador Financeiro</Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link href="/" passHref asChild>
              <Nav.Link>Visão Geral</Nav.Link>
            </Link>
            <Link href="/transactions" passHref asChild>
              <Nav.Link>Transações</Nav.Link>
            </Link>
            <Link href="/reports" passHref asChild>
              <Nav.Link>Relatórios</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;