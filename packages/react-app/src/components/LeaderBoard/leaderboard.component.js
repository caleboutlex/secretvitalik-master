import React from "react";
import { useWeb3React } from "@web3-react/core";
import useGetEvents from "../../hooks/useGetEvents";

import { } from "./leaderboard.styles";

const Leaderboard = () => {
    const { library } = useWeb3React();
    const events = useGetEvents();

    function compareNumbers(a, b) {
        return b - a;
      }

    let EventArray = new Array();

    for(let i = 0 ; i < events.length ; i++) {
        EventArray.push(events[i].returnValues._amount);
    }
    
    EventArray.sort(compareNumbers);

    return(
        <div>
            {EventArray.map( leader => (
            <div>
                <div>
                    { library.utils.fromWei(leader, 'ether')}
                </div>
            </div>
            ))}
        </div>
    );
}

export default Leaderboard;