import React from 'react';

function Transaction(props) {

    const { id, date, category, amount, deleteTransaction } = props;

    const handleClick = () => {
        deleteTransaction(id);
    }

    return (
        <tr className="">
            <td >{date}</td>
            <td>{category.name}</td>
            <td>{amount}</td>
            <td className='text-end'><button onClick={handleClick} className='btn btn-danger btn-sm'>X</button></td>
        </tr>
    );
}

export default Transaction;