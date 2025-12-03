'use client'; 

import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

/**
 * Modal com formulário para adicionar ou editar uma transação.
 * @param {object} props - Propriedades do componente.
 * @param {boolean} props.show - Se o modal deve estar visível.
 * @param {function} props.handleClose - Função para fechar o modal.
 */
const TransactionFormModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: new Date().toISOString().substring(0, 10), 
    type: 'despesa', 
    category: '',
  });

  const categories = {
    receita: ['Salário', 'Freelance', 'Investimento', 'Outros'],
    despesa: ['Moradia', 'Alimentação', 'Transporte', 'Lazer', 'Contas', 'Outros'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da Transação:', formData);
    
    setFormData({
      description: '',
      amount: '',
      date: new Date().toISOString().substring(0, 10),
      type: 'despesa',
      category: '',
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Nova Transação</Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Tipo</Form.Label>
            <Col sm="9">
              <Form.Select 
                name="type" 
                value={formData.type} 
                onChange={handleChange} 
                required
              >
                <option value="despesa">Despesa</option>
                <option value="receita">Receita</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descrição</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ex: Aluguel, Salário, Jantar fora"
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formAmount">
              <Form.Label>Valor (R$)</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="0.00" 
                name="amount" 
                value={formData.amount} 
                onChange={handleChange} 
                min="0.01"
                step="0.01"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formDate">
              <Form.Label>Data</Form.Label>
              <Form.Control 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Categoria</Form.Label>
            <Form.Select 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Selecione a Categoria</option>
              {categories[formData.type].map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Form.Select>
            <Form.Text muted>
                Categorias são filtradas com base no Tipo selecionado.
            </Form.Text>
          </Form.Group>

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Salvar Transação
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TransactionFormModal;