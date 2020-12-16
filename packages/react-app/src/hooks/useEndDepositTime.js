import { useState, useEffect } from 'react'; 
import { useWeb3React } from '@web3-react/core'; 
import { abis, addresses } from "@project/contracts"

const useEndDepositTime =  () => {
    const { account, library, chainId } = useWeb3React();
    const [ christmaseve, setChristmasEve] = useState();

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

          Contract.methods.christmaseve().call().then((christmaseve) =>{
              if (!stale) {
                setChristmasEve(christmaseve)
              }
            })
            .catch(() => {
              if (!stale) {
                setChristmasEve(null)
              }
            })
    
          return () => {
            stale = true
            setChristmasEve(undefined)
          }
        }
      }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

      return christmaseve
  }

  export default useEndDepositTime