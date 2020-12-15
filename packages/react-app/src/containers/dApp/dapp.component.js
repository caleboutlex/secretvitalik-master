import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Grid, Card } from "./dapp.styles";

const Dapp = () => {
    return (
        <Grid>
            <Card>
                <h2>Vitaliks: </h2>
                <div>2</div>
            </Card>
            <Card>
                <h2>ETH Pool: </h2>
                <div>2</div>
            </Card>
            <Card>
                <h2>AVG Pool: </h2>
                <div>2</div>
            </Card>
            <Card>
                <h2>Deposit End Time: </h2>
                <div>2</div>
            </Card>
            <Card>
                <h2>Santas Gift Time: </h2>
                <div>2</div>
            </Card>
        </Grid>
    );
}
export default Dapp;