import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SummaryCard from '../components/SummaryCard'; 

const HomePage = () => {
  const summaryData = [
    { title: 'Receitas Totais', value: 'R$ 5.500,00', variant: 'success' },
    { title: 'Despesas Totais', value: 'R$ 2.100,00', variant: 'danger' },
    { title: 'Saldo Atual', value: 'R$ 3.400,00', variant: 'primary' },
  ];

  return (
    <div>
      <h1 className="mb-4">Dashboard Financeiro</h1>
      
      <Row className="mb-5">
        {summaryData.map((data) => (
          <Col md={4} key={data.title} className="mb-3">
            <SummaryCard 
              title={data.title} 
              value={data.value} 
              variant={data.variant} 
            />
          </Col>
        ))}
      </Row>

      <Row>
        <Col md={12}>
          <h2>Transações Recentes</h2>
          <div className="p-4 border rounded bg-light">
            <p className="text-muted">A tabela de transações recentes será construída em um passo futuro.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;