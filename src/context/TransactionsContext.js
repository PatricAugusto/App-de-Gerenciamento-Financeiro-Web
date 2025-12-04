'use client'; 

import React, { createContext, useState, useContext, useMemo } from 'react';

const TransactionsContext = createContext(null);

const INITIAL_TRANSACTIONS = [
    { id: 1, date: '2025-12-01', description: 'Salário', type: 'receita', category: 'Trabalho', amount: 5500.00 },
    { id: 2, date: '2025-12-02', description: 'Aluguel', type: 'despesa', category: 'Moradia', amount: 1500.00 },
    { id: 3, date: '2025-12-03', description: 'Supermercado', type: 'despesa', category: 'Alimentação', amount: 600.00 },
    { id: 4, date: '2025-12-03', description: 'Freelance', type: 'receita', category: 'Extra', amount: 800.00 },
];

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);

    const summary = useMemo(() => {
        const totals = transactions.reduce((acc, transaction) => {
            const amount = parseFloat(transaction.amount); 

            if (transaction.type === 'receita') {
                acc.totalReceitas += amount;
                acc.saldo += amount;
            } else if (transaction.type === 'despesa') {
                acc.totalDespesas += amount;
                acc.saldo -= amount;
            }
            return acc;
        }, {
            totalReceitas: 0,
            totalDespesas: 0,
            saldo: 0,
        });

        return totals;
    }, [transactions]);

    /**
     * Adiciona uma nova transação à lista.
     * @param {object} transactionData - Os dados da nova transação (desc, valor, etc.).
     */
    const addTransaction = (transactionData) => {
        const newTransaction = {
            id: transactions.length + 1, 
            ...transactionData,
            amount: parseFloat(transactionData.amount),
        };

        setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    };

    const contextValue = {
        transactions,
        addTransaction,
        summary,
    };

    return (
        <TransactionsContext.Provider value={contextValue}>
            {children}
        </TransactionsContext.Provider>
    );
};

export const useTransactions = () => {
    const context = useContext(TransactionsContext);
    if (!context) {
        throw new Error('useTransactions must be used within a TransactionsProvider');
    }
    return context;
};

export default TransactionsContext;