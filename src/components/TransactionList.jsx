import React, { useState } from 'react';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';

function TransactionList(props) {

    const { transactions, deleteTransaction, addTransaction, categories } = props;

    return (<div className='container w-50'>
        <div className="table-responsive-md">
            <table className="table table-primary table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col" className='text-end'><button className='btn btn-success btn-sm' data-bs-toggle="modal" data-bs-target="#transactionsFormModal">Add transaction</button></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length === 0 ? <tr><td colSpan="4" className='text-center'>No transactions</td></tr> :
                        transactions.map((transaction) => {
                            return <Transaction deleteTransaction={deleteTransaction} key={transaction.id} id={transaction.id} date={transaction.date} category={transaction.category} amount={transaction.amount} />
                        })}
                </tbody>
            </table>
        </div>
        <TransactionForm transactions={transactions} addTransaction={addTransaction} categories={categories} />
    </div>);
}

export default TransactionList;