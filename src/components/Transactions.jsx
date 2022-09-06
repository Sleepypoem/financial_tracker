import React, { useState } from 'react';

const testObj = {
    "date": "today",
    "category": "salary",
    "amount": "1000"
};

function Transactions(props) {

    const { transactions } = props;

    return (
        <div className='container my-4 border p-1'>
            <div className="d-grid gap-2 my-2">
                <button type="button" name="" id="" className="btn btn-success">Add transaction +</button>
            </div>
            <div className="container d-flex justify-content-between bg-primary text-white">
                <h4 className='w-25'>Date</h4>
                <h4 className='w-25'>Category</h4>
                <h4 className='w-25'>Amount</h4>
            </div>
            {transactions.length === 0 ? "No transactions" : transactions.map((ele, idx) => {
                return (<div key={idx} className="container d-flex justify-content-between border">
                    <h6 className='w-25'>{ele.date}</h6>
                    <h6 className='w-25'>{ele.category}</h6>
                    <h6 className='w-25'>{ele.amount}</h6>
                </div>)
            })}
        </div>
    );
}

export default Transactions;