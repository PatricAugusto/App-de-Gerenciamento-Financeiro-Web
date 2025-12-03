'use client'; 

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
  
        <Link href="/" as={Navbar.Brand}>
          💰 Gerenciador Financeiro
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link href="/" as={Nav.Link}>
              Visão Geral
            </Link>
            
            <Link href="/transactions" as={Nav.Link}>
              Transações
            </Link>
            
            <Link href="/reports" as={Nav.Link}>
              Relatórios
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;