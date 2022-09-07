import React from 'react';

function CategoryForm(props) {

    const { categories, addCategory } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCategory = {
            "id": categories.length,
            "name": e.target[0].value,
            "type": e.target[1].value
        }
        addCategory(newCategory);
    }

    return (
        <div className="modal fade" id="categoriesFormModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="formModalLabel">Add category</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control" name="Label" id="Label" placeholder="Enter category name." />
                                <label htmlFor="floatingLabel">Name</label>
                            </div>
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                                <label htmlFor="floatingSelect">Select type.</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary"  >Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CategoryForm;