import React from 'react';
import Category from './Category';

function CategoriesList(props) {

    const { categories } = props;

    return (
        <div className='container w-25' >
            <div class="table-responsive-md">
                <table class="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => {
                            return <Category name={category.name} type={category.type} />
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default CategoriesList;