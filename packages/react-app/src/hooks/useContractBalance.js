import { useState, useEffect } from 'react'; 
import { useWeb3React } from '@web3-react/core'; 
import { abis, addresses } from "@project/contracts"

const useContractBalance = () => {
    const { account, library, chainId } = useWeb3React();

    const [contractbalance, setContractBalance] = useState()

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

        Contract.methods
          .getOverallFunds().call()
          .then((contractbalance) => {
            if (!stale) {
                setContractBalance(library.utils.fromWei(contractbalance, 'ether'))
            }
          })
          .catch(() => {
            if (!stale) {
                setContractBalance(null)
            }
          })
  
        return () => {
          stale = true
          setContractBalance(undefined)
        }
      } else if (!!account && !!library) {
        let stale = false
        let Contract;

          if (chainId == 3 ) {
            Contract = new library.eth.Contract(abis.secretsanta, addresses.ropstenSanta);

          } else if (chainId == 42 ) {
            Contract = new library.eth.Contract(abis.secretsanta, addresses.kovanSanta);
          }

        Contract.methods
          .getOverallFunds().call()
          .then((contractbalance) => {
            if (!stale) {
                setContractBalance(contractbalance)
            }
          })
          .catch(() => {
            if (!stale) {
                setContractBalance(null)
            }
          })
  
        return () => {
          stale = true
          setContractBalance(undefined)
        }
      }
    }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  
    return contractbalance
  }

  export default useContractBalance