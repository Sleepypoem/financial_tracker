import React from 'react';

function Category(props) {

    const { name, type } = props;
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td className='text-end'><button className='btn btn-danger btn-sm'>X</button></td>
        </tr>
    );
}

export default Category;