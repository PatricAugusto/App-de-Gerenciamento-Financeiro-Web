'use client'; 

import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import TransactionsTable from '../../components/TransactionsTable'; 
import TransactionFormModal from '../../components/TransactionFormModal'; 

const TransactionsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container className="p-0">
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Lista de Transações</h1>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={handleShow}> 
            + Nova Transação
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <TransactionsTable />
        </Col>
      </Row>
      
      <TransactionFormModal 
        show={showModal} 
        handleClose={handleClose} 
      />
    </Container>
  );
};

export default TransactionsPage;