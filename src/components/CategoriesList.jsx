import React from 'react';
import Category from './Category';
import CategoryForm from './CategoryForm';

function CategoriesList(props) {

    const { categories, addCategory, deleteCategory } = props;

    return (
        <div className='container w-50' >
            <div className="table-responsive-md">
                <table className="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col" className='text-end'><button className='btn btn-success btn-sm' data-bs-toggle="modal" data-bs-target="#categoriesFormModal">Add category</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length === 0 ? <tr><td colSpan="4" className='text-center'>No categories.</td></tr> :
                            categories.map((category) => {
                                return <Category key={category.id} id={category.id} name={category.name} type={category.type} deleteCategory={deleteCategory} />
                            })}
                    </tbody>
                </table>
            </div>
            <CategoryForm categories={categories} addCategory={addCategory} />
        </div>
    );
}

export default CategoriesList;