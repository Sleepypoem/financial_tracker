import React from 'react';

function Category(props) {

    const { name, type, id, deleteCategory } = props;

    const handleClick = () => {
        deleteCategory(id)
    }


    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td className='text-end'><button onClick={handleClick} className='btn btn-danger btn-sm'>X</button></td>
        </tr>
    );
}

export default Category;