import { Link } from "react-router-dom"
import { connectWallet } from "../services/blockchain"
import { truncate, useGlobalState } from "../store"
import '../styles.css';

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  
  return (
    <header
      className="flex justify-between items-center
      p-5 bg-white shadow-lg fixed top-0 left-0 right-0 custom-font"
    >
      <Link
        to="/" 
        className="flex justify-start items-center
      text-xl text-black space-x-1 ml-0 md:ml-20"
      >
        <span>SmartBacker</span>
      </Link> 

      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button 
            type="button"
            className='inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-[10px] shadow-md hover:bg-green-700 mr-0 md:mr-20'
            onClick={connectWallet}
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button 
            type="button"
            className='inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-[10px] shadow-md hover:bg-green-700 mr-0 md:mr-20'
          onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
