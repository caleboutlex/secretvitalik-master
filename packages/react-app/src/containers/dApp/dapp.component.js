import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Enter from "../../components/Enter/enter.component";
import Leaderboard from '../../containers/Leaderboard/leaderboard.component';

import { Grid, Card, Form } from "./dapp.styles";

import useBalance from "../../hooks/useBalance";
import useContractBalance from "../../hooks/useContractBalance"
import useGetAllSantas from '../../hooks/useGetAllSantas';
import useEndDepositTime from '../../hooks/useEndDepositTime'
import useEndTime from '../../hooks/useEndTime'

const Dapp = () => {
    const balance = useBalance();
    const contractbalance = useContractBalance();
    const allSantas = useGetAllSantas();
    const depositEndTime = useEndDepositTime();
    const endtime = useEndTime();

    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM	
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    }

    return (
        <Grid>
            <Form style={{ gridColumn: "span 4 / auto" }}>
                <Enter />
            </Form>
            <Card style={{ gridRow: "span 2 / auto" }}>
                <h2>Top gifts </h2>
                <Leaderboard />
            </Card>
            <Card>
                <h2>Your Balance </h2>
                <div> {balance} </div>
            </Card>
            <Card>
                <h2>Pool Total </h2>
                <div>{contractbalance} ETH</div>
            </Card>
            <Card>
                <h2>Pool Avg </h2>
                <div>{contractbalance / allSantas}</div>
            </Card>
            <Card>
                <h2>Vitaliks </h2>
                <div>{allSantas}</div>
            </Card>
            <Card>
                <h2>Deposits Ends </h2>
                <div>{convertTimestamp(depositEndTime)}</div>
            </Card>
            <Card>
                <h2>Deploy Gifts </h2>
                <div>{convertTimestamp(endtime)}</div>
            </Card>
        </Grid>
    );
}
export default Dapp;