import React, { useState } from 'react';
import ChartElement from './ChartElement';
import CategoriesList from './CategoriesList';
import TransactionList from './TransactionList';


function DashBoard() {

    const [categories, setCategories] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    }

    const addCategory = (category) => {
        setCategories([...categories, category]);
    }

    const deleteTransaction = (id) => {
        let transactionsNew = transactions.filter((transaction) => id !== transaction.id);

        setTransactions(transactionsNew);
    }

    const deleteCategory = (id) => {
        let categoriesNew = categories.filter((category) => id !== category.id);

        setCategories(categoriesNew);
    }

    return (
        <div className='container-fluid d-flex flex-row'>
            <CategoriesList categories={categories} addCategory={addCategory} deleteCategory={deleteCategory} />
            <TransactionList deleteTransaction={deleteTransaction} transactions={transactions} addTransaction={addTransaction} categories={categories} />
            <ChartElement transactions={transactions} />
        </div>
    );
}

export default DashBoard;