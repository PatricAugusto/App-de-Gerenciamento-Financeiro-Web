import React from 'react';
import { Table, Badge } from 'react-bootstrap';

const TransactionsTable = () => {

    const transactions = [
    { id: 1, date: '01/12/2025', description: 'Salário', type: 'receita', category: 'Trabalho', amount: 5500.00 },
    { id: 2, date: '02/12/2025', description: 'Aluguel', type: 'despesa', category: 'Moradia', amount: 1500.00 },
    { id: 3, date: '03/12/2025', description: 'Supermercado', type: 'despesa', category: 'Alimentação', amount: 600.00 },
    { id: 4, date: '03/12/2025', description: 'Freelance', type: 'receita', category: 'Extra', amount: 800.00 },
  ];
  
  const formatCurrency = (amount) => {
    return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const getBadgeVariant = (type) => {
    return type === 'receita' ? 'success' : 'danger';
  };

  return (
    <Table striped bordered hover responsive className="shadow-sm">
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Categoria</th>
          <th className="text-end">Valor</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>
              <Badge bg={getBadgeVariant(transaction.type)}>
                {transaction.type.toUpperCase()}
              </Badge>
            </td>
            <td>{transaction.category}</td>
            <td className={`text-end fw-bold text-${getBadgeVariant(transaction.type)}`}>
              {formatCurrency(transaction.amount)}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionsTable;