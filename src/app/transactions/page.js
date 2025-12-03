import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import TransactionsTable from '../../components/TransactionsTable'; 

const TransactionsPage = () => {
  return (
    <Container className="p-0">
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Lista de Transações</h1>
        </Col>
        <Col className="text-end">

          <Button variant="success">
            + Nova Transação
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <TransactionsTable />
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionsPage;