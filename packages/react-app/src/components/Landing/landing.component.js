import React from "react";

import { LandingWrapper, Title, List } from './landing.styles';

const Landing = () => {

    return (
        <LandingWrapper>
            <Title>Who's your <br />sekret vitalik?</Title>
            <List>
                <li>Minimum deposit 0.01 ETH</li>
                <li>Deposit ETH to the Smart Contract</li>
                <li>Get randomly paired to another Sekret Vitalik</li>
                <li>On Christmas day you receive the ETH from your Sekret Vitalik!</li>
            </List>
        </LandingWrapper>
    )
};
export default Landing;