import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Bar } from 'react-chartjs-2';

// random values for demo
let rFactor = function () {
    return Math.round(Math.random() * 100);
};

//Bar chart
let barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Iphone',
        backgroundColor: '#1e88e5',
        borderColor: '#1e88e5',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    },
    {
        label: 'Ipad',
        backgroundColor: '#7460ee',
        borderColor: '#7460ee',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }]
};

const SalesSummary = () => {
    return (
        <Card>
            <CardBody>
                <h1>New in town</h1>
                <p>The best</p>
            </CardBody>
        </Card>
    );
}

export default SalesSummary;
