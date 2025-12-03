import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'react-bootstrap';

/**
 * Componente simples para exibir um resumo financeiro (Receita, Despesa, Saldo).
 * @param {object} props - Propriedades do componente.
 * @param {string} props.title - O título do resumo (ex: 'Saldo Atual').
 * @param {string} props.value - O valor financeiro (ex: 'R$ 3.400,00').
 * @param {string} props.variant - A cor de fundo do cartão (primary, success, danger).
 */
const SummaryCard = ({ title, value, variant = 'primary' }) => {
  return (
    <Card 
      bg={variant} 
      text="white" 
      className="shadow-sm" 
    >
      <CardBody>
        <CardTitle className="text-uppercase" style={{ fontSize: '0.9rem' }}>
          {title}
        </CardTitle>
        <CardText style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {value}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default SummaryCard;