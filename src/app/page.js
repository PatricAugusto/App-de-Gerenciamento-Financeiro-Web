'use client'; 

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SummaryCard from '../components/SummaryCard';
import { useTransactions } from '../context/TransactionsContext'; 

const formatCurrency = (amount) => {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const HomePage = () => {
  const { summary } = useTransactions(); 
  
  const summaryData = [
    { 
        title: 'Receitas Totais', 
        value: formatCurrency(summary.totalReceitas), 
        variant: 'success' 
    },
    { 
        title: 'Despesas Totais', 
        value: formatCurrency(summary.totalDespesas), 
        variant: 'danger' 
    },
    { 
        title: 'Saldo Atual', 
        value: formatCurrency(summary.saldo), 
        variant: 'primary' 
    },
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