import { useState, useEffect } from 'react'; 
import { useWeb3React } from '@web3-react/core'; 
import { abis, addresses } from "@project/contracts"

const useEndTime =  () => {
    const { account, library, chainId } = useWeb3React();
    const [ christmasday, setChristmasday] = useState();

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
          

          Contract.methods.christmasday().call().then((christmasday) =>{
              if (!stale) {
                setChristmasday(christmasday)
              }
            })
            .catch(() => {
              if (!stale) {
                setChristmasday(null)
              }
            })
    
          return () => {
            stale = true
            setChristmasday(undefined)
          }
        }
      }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

      return christmasday
  }

  export default useEndTime;