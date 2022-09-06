import React from 'react';
import TransactionList from './TransactionList';

const transactionsObj = [
    {
        "date": "today",
        "category": "salary",
        "amount": 1000
    },
    {
        "date": "yesterday",
        "category": "gas",
        "amount": 500
    }
];
function DashBoard() {
    return (
        <div>
            <TransactionList transactions={transactionsObj} />
        </div>
    );
}

export default DashBoard;