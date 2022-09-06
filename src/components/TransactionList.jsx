import React, { useState } from 'react';
import Transaction from './Transaction';

function TransactionList(props) {

    const { transactions } = props;

    return (<div className='container w-25'>
        <div className="table-responsive-md">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length === 0 ? <tr><td colspan="3" className='text-center'>No transactions</td></tr> :
                        transactions.map((transaction) => {
                            return <Transaction date={transaction.date} category={transaction.category} amount={transaction.amount} />
                        })}
                </tbody>
            </table>
        </div>

    </div>);
}

export default TransactionList;