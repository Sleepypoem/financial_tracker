import React from 'react';

function Transaction(props) {

    const { date, category, amount } = props;
    return (
        <tr className="">
            <td >{date}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td><button className='btn btn-danger btn-sm'>X</button></td>
        </tr>
    );
}

export default Transaction;