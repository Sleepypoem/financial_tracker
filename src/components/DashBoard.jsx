import React from 'react';
import Transactions from './Transactions';

function DashBoard() {
    return (
        <div>
            <Transactions transactions={[]} />
        </div>
    );
}

export default DashBoard;