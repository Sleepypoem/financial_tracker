import React, { useState } from 'react';
import CategoriesList from './CategoriesList';
import TransactionList from './TransactionList';

const transactionsObj = [
    {
        "id": "1",
        "date": "today",
        "category": "salary",
        "amount": 1000
    },
    {
        "id": "2",
        "date": "yesterday",
        "category": "gas",
        "amount": 500
    }
];
function DashBoard() {

    const [categories, setCategories] = useState([{ "id": 1, "name": "electricity", "type": "spend" }]);
    const [transactions, setTransactions] = useState(transactionsObj);

    const deleteTransaction = (id) => {
        let transactionsNew = transactions.filter((transaction) => id !== transaction.id);

        setTransactions(transactionsNew);
    }

    return (
        <div>
            <CategoriesList categories={categories} />
            <TransactionList deleteTransaction={deleteTransaction} transactions={transactions} />
        </div>
    );
}

export default DashBoard;