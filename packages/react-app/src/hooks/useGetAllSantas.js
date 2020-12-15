import { useState, useEffect } from 'react'; 
import { useWeb3React } from '@web3-react/core'; 
import { abis, addresses } from "@project/contracts"

const useGetAllSantas =  () => {
    const { account, library, chainId } = useWeb3React();

    const [ Santas, SetSantas] = useState();
    useEffect(() => {
        if (!!account && !!library && chainId === 3) {
            let stale = false
            let Contract = new library.eth.Contract(abis.secretsanta, addresses.ropstenSanta);
    
            Contract.methods.getOverallSantas().call().then((Santas) =>{
                if (!stale) {
                    SetSantas(Santas)
                }
              })
              .catch(() => {
                if (!stale) {
                    SetSantas(null)
                }
              })
      
            return () => {
              stale = true
              SetSantas(undefined)
            }
          }
        }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

    return Santas;         

  }

export default useGetAllSantas; 