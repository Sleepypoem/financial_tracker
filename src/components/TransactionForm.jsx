import React from 'react';

function TransactionForm(props) {

    const { categories, transactions, addTransaction } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date(e.target[0].value).toDateString();
        console.log(date);
        let amount = e.target[2].value;
        let selectValue = e.target[1].value.split(",");
        let newTransaction = {
            "id": transactions.length,
            date,
            "category": {
                "id": selectValue[0],
                "name": selectValue[1],
                "type": selectValue[2]
            },
            amount
        }
        addTransaction(newTransaction);
    }

    if (categories.length <= 0) {
        return (
            <div className="modal fade" id="transactionsFormModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalLabel">No categories</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h4>Add a category first</h4>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="modal fade" id="transactionsFormModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="formModalLabel">Add transactions</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className="form-control" name="date" id="date" />
                                <label htmlFor="floatingLabel">Date</label>
                            </div>
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    {categories.map((category) => {
                                        return (<option key={category.id} className='text-capitalize' value={[category.id, category.name, category.type]}>{category.name[0].toUpperCase() + category.name.substring(1)}</option>)
                                    })}
                                </select>
                                <label htmlFor="floatingSelect">Select category.</label>
                            </div>
                            <div className="form-floating my-3">
                                <input
                                    type="number"
                                    className="form-control" name="amount" id="amount" min={1} />
                                <label htmlFor="floatingLabel">Amount</label>
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

export default TransactionForm;