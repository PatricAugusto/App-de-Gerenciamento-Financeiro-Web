'use client'; 

import React from 'react';
import { Container, Table, Badge, Row, Col } from 'react-bootstrap';
import { useTransactions } from '../../context/TransactionsContext'; 

// Função auxiliar para formatar como moeda
const formatCurrency = (amount) => {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

/**
 * Agrupa e soma transações por categoria.
 * @param {Array} transactions - Lista de transações.
 * @param {string} type - 'receita' ou 'despesa'.
 * @returns {object} Objeto com { categoria: total_valor }.
 */
const aggregateByCategory = (transactions, type) => {
  return transactions
    .filter(t => t.type === type)
    .reduce((acc, t) => {
      const amount = parseFloat(t.amount);
      acc[t.category] = (acc[t.category] || 0) + amount;
      return acc;
    }, {});
};

const ReportsPage = () => {
  const { transactions } = useTransactions();
  
  // Agregações de Receitas e Despesas
  const expenseSummary = aggregateByCategory(transactions, 'despesa');
  const revenueSummary = aggregateByCategory(transactions, 'receita');

  return (
    <Container className="p-0">
      <h1 className="mb-4">Relatórios Financeiros</h1>
      
      <Row>
        {/* Coluna de Despesas por Categoria */}
        <Col md={6} className="mb-4">
          <h2>Despesas por Categoria</h2>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead>
              <tr className="table-danger">
                <th>Categoria</th>
                <th className="text-end">Total Gasto</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(expenseSummary).map(([category, total]) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td className="text-end fw-bold text-danger">
                    {formatCurrency(total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {/* Coluna de Receitas por Categoria */}
        <Col md={6} className="mb-4">
          <h2>Receitas por Categoria</h2>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead>
              <tr className="table-success">
                <th>Categoria</th>
                <th className="text-end">Total Recebido</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(revenueSummary).map(([category, total]) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td className="text-end fw-bold text-success">
                    {formatCurrency(total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      
      {/* Aqui poderíamos adicionar gráficos ou relatórios de período */}
      <div className="mt-5 p-4 border rounded bg-light">
          <p className="text-muted">Espaço reservado para gráficos avançados (Ex: Gráfico de pizza, Linha do tempo).</p>
      </div>
    </Container>
  );
};

export default ReportsPage;