import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../../abis/LandRegistry.json";

const { ethereum } = window;
export const NewContext = createContext();

// Create contract for accessing in the abi file.....
const createEthereumContract = () => {
  const contractAddress = "0x13dc424846d34b8d415F45bF2286a9591C775b32";
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI.abi,
    signer
  );
  console.log(transactionsContract);

  return transactionsContract;
};

const Context = ({ children }) => {
  const [account, setAccount] = useState();
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [lands, setLands] = useState([]);
  const [signupHash, setSignupHash] = useState('  ')
  const [disable, setDisable] = useState(false);

  const [result, setResult] = useState([]);
  const connectMetaMask = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const createBuyers = async (data) => {
    const { name, email, nid } = data;
    const GetContract = createEthereumContract();
    const res = await GetContract.addBuyers(account, name, nid, email);
    await res.wait();
    return res;
  };

  const getBuyers = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getBuyers();
    setBuyers(res);
    console.log(res);
  };

  const createSellers = async (data) => {
    const { name, email, nid } = data;
    const GetContract = createEthereumContract();
    const res = await GetContract.addSellers(account, name, nid, email);
    await res.wait();
    return res;
  };

  const getSellers = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getSellers();
    setSellers(res);
    console.log(res);
  };

  const createSellerLandInfo = async (data) => {
    const { serial, city, area, price, property } = data;
    const GetContract = createEthereumContract();
    const res = await GetContract.addlandDetails(
      account,
      city,
      area,
      price,
      property
    );
    await res.wait();
    console.log(res);
  };

  const getSellerLandInfo = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.getLandDetails();
    setLands(res);
    console.log(res);
  };

  const buyNewLand = async (data) => {
    const { id, city, area, price } = data;
    console.log(price._hex);
    const GetContract = createEthereumContract();
    const parseAmount = ethers.utils.parseEther(`${parseInt(price._hex)}`);
    console.log(parseAmount._isBigNumber);
    setDisable(parseAmount._isBigNumber);
    await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          to: id,
          gas: "0x5208",
          value: parseAmount._hex,
        },
      ],
    });
    const buyTransaction = await GetContract.buyland(
      account,
      id,
      city,
      parseInt(area._hex),
      parseInt(price._hex)
    );
    await buyTransaction.wait();
  };
  const soldLand = async () => {
    const GetContract = createEthereumContract();
    const res = await GetContract.buyLandD();
    console.log("Sold land", res)
  };

  useEffect(() => {
    connectMetaMask();
    createEthereumContract();
    getBuyers();
    getSellers();
    getSellerLandInfo();
    soldLand()
  }, []);

  return (
    <NewContext.Provider
      value={{
        result,
        setResult,
        account,
        createBuyers,
        createSellers,
        createSellerLandInfo,
        lands,
        buyers,
        sellers,
        buyNewLand,
        soldLand,
        disable
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default Context;
