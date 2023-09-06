import Image from 'next/image'
import CatsButton from './components/CatsButton'
import { getWeb3 } from './Web3Setup';
import { getContractInstance } from './ContractSetUp';
import HelloWorldContract from '../public/contracts/HelloWorld.json';

export default async function Home() {

  return (
    <main className="flex justify-center items-center h-screen">
     <h1></h1>
    </main>
  )
}
