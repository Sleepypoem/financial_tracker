import React, { useState } from 'react';
import Transaction from './Transaction';

function TransactionList(props) {

    const { transactions, deleteTransaction } = props;

    return (<div className='container w-25'>
        <div className="table-responsive-md">
            <table className="table table-primary table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length === 0 ? <tr><td colSpan="3" className='text-center'>No transactions</td></tr> :
                        transactions.map((transaction) => {
                            return <Transaction deleteTransaction={deleteTransaction} key={transaction.id} id={transaction.id} date={transaction.date} category={transaction.category} amount={transaction.amount} />
                        })}
                </tbody>
            </table>
        </div>

    </div>);
}

export default TransactionList;