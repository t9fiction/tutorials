import React, { useState } from "react";
import "./nft-minter.css";
import Web3 from "web3";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { Success } from "../success/Success";
import { ConnectWallet } from "../auth/ConnectWallet";
// Contract Address and ABI
import { contractAddress, contractABI } from "../../contracts/nft-contract";

export default function NftMinter() {
  const { isAuthenticated, user } = useMoralis();
  const [nftName, setnftName] = useState("");
  const [nftDescription, setnftDescription] = useState("");
  const [nftImage, setnftImage] = useState("");
  const [nftAddress, setNftAddress] = useState("");
  const [isminted, setisminted] = useState(false);
  const [isMinting, setisMinting] = useState(false);
  const [mintingStatus, setmintingStatus] = useState("");

  // Get the current web3 provider
  let web3 = new Web3(Web3.givenProvider);

  // Minting logic
  const mintNft = async (e) => {};

  // Display the success page when the minting is set to True
  if (isminted) {
    return (
      <React.Fragment>
        <Success setisminted={setisminted} nftAddress={nftAddress} />
      </React.Fragment>
    );
  }

  return (
    <section className='nft-minting-section'>
      {isAuthenticated ? (
        <React.Fragment>
          {/* Display Minting Form */}
          <section className='page-hero'>
            <h2 className='hero-title text-style'>Mint New NFT</h2>
          </section>
          <section className='form-wrapper'>
            <form>
              <div className='form-group'>
                <label htmlFor='nft-name'>NFT Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='nft-name'
                  placeholder='e.g Apes'
                  value={nftName}
                  onChange={(e) => setnftName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='nft-image'>NFT File</label>
                <input
                  type='file'
                  onChange={(e) => setnftImage(e.target.files[0])}
                  className='form-control'
                  id='nft-image'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='nft-description'>NFT Description</label>
                <textarea
                  type='text'
                  className='form-control'
                  id='nft-description'
                  placeholder='Write a short description of your NFT'
                  value={nftDescription}
                  onChange={(e) => setnftDescription(e.target.value)}
                />
              </div>
              {/* Mint button */}
              <div className='form-group btn-wrap'>
                <button type='button' className='mint-btn' onClick={mintNft}>
                  {isMinting ? mintingStatus : "Mint NFT"}
                </button>
              </div>
            </form>
          </section>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Display Authentication Page */}
          <section className='auth-section'>
            <section className='page-hero'>
              <h2 className='hero-title text-style'>Mint New NFTs</h2>
            </section>
            <ConnectWallet />
          </section>
        </React.Fragment>
      )}
    </section>
  );
}
