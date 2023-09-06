import Image from 'next/image'
import CatsButton from './components/CatsButton'
import { getWeb3 } from './Web3Setup';
import { getContractInstance } from './ContractSetUp';
import HelloWorldContract from '../public/contracts/HelloWorld.json';


async function getContract() {
  const web3 = await getWeb3();
  const contractInstance = await getContractInstance(web3, HelloWorldContract);
  const accounts = await web3.eth.getAccounts();
  return { contractInstance, accounts };
}
export default async function Home() {
  const { contractInstance, accounts } = await getContract();
  return (
    <main className="flex justify-center items-center h-screen">
     <h1></h1>
    </main>
  )
}
