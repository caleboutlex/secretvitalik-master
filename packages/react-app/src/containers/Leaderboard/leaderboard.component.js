import React from "react";
import { useWeb3React } from "@web3-react/core";
import useGetEvents from "../../hooks/useGetEvents";

import { Card, List } from "./leaderboard.styles";

const Leaderboard = () => {
    const { library } = useWeb3React();
    const events = useGetEvents();

    function compareNumbers(a, b) {
        return b - a;
    }

    let EventArray = new Array();
    let EventSlice = new Array();

    if(events != undefined) {
        for (let i = 0; i < events.length; i++) {
            EventArray.push(events[i].returnValues._amount);
        }
    
        EventArray.sort(compareNumbers);
        EventSlice = EventArray.slice(0, 10);
    }
    

    return (
        <List>
            {EventSlice.map(leader => (
                <li>{library.utils.fromWei(leader, 'ether')} ETH</li>
            ))}
        </List>
    );
}

export default Leaderboard;