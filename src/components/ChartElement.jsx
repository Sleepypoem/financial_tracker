import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { format } from "date-fns";

Chart.register(...registerables);
function ChartElement(props) {

    const { transactions } = props;

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const processTransactions = (transactions, type) => {
        const monthsWithTxs = new Array(12).fill(0);
        for (const transaction of transactions) {


            if (transaction.category.type !== type) {
                continue;
            }
            const monthName = format(new Date(transaction.date), "MMMM");
            const indexOfMonth = labels.indexOf(monthName);
            monthsWithTxs[indexOfMonth] += Number(transaction.amount);
        }
        return monthsWithTxs;
    };

    const chartData = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Income",
                backgroundColor: "lightblue",
                data: processTransactions(transactions, "income")
            },
            {
                label: "Expense",
                backgroundColor: "lightcoral",
                data: processTransactions(transactions, "expense")
            }
        ]
    }

    return (
        <div className='container w-50'>
            <Bar
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: "Your financial data",
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: "right"
                    }
                }}
            />
        </div>
    );
}

export default ChartElement;