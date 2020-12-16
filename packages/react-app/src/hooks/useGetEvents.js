import { useState, useEffect } from 'react'; 
import { useWeb3React } from '@web3-react/core'; 
import { abis, addresses } from "@project/contracts"

const useGetEvents =  () => {
    const { account, library, chainId } = useWeb3React();
    const [ events, setUserevent] = useState([]);
    

    useEffect(() => {
      if (!!account && !!library) {
          let stale = false
          let Contract;

          if (chainId === 3 ) {
            Contract = new library.eth.Contract(abis.secretsanta, addresses.ropstenSanta);
            
          } else if (chainId === 42 ) {
            Contract = new library.eth.Contract(abis.secretsanta, addresses.kovanSanta);

          } else if (chainId === 4 ) {
            Contract = new library.eth.Contract(abis.secretsanta, addresses.rinkebySanta);
          } else if (chainId === 1 ) {
            Contract = new library.eth.Contract(abis.secretsanta, addresses.mainnetSanta);
          }

          Contract.getPastEvents('NewSanta', { fromBlock: 10000, toBlock: 'latest'}).then((events) =>{
              if (!stale) {
                setUserevent(events)
              }
            })
            .catch(() => {
              if (!stale) {
                setUserevent(null)
              }
            })
    
          return () => {
            stale = true
            setUserevent(undefined)
          }
        }
      }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

      return events

  }

  export default useGetEvents; 