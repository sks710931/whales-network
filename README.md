# Whale Network

## System Setup
1. make sure you have latest Node LTS version and NPM installed in your system
2. Install Truffle in your system by running `npm install -g truffle`
3.  once truffle is installed clone this repository and run the command `npm install` in the root folder.

## Deploy Contract 
1. in the truffle config.js file look for the text

    const  MNEMONIC = "YOUR PRIVATE KEY";
    replace "YOUR PRIVATE KEY" with private key of your wallet.
2. in the migrations/2_deploy_contract.js replace "SERVICE FEE COLLECTOR ADDRESS" with the wallet address where service fee will be sent.
3. run `npm run compile` to compile the contract
4. run `npm run deploy-test` to deploy to bsc testnet
5. run `npm run deploy-main` to deploy to bsc mainnet
	
## Verify Contract

1. once the contract is deployed copy the contract address from  the terminal 
2. go to [bscscan.com](https://bscscan.com) or [testnet.bscscan.com](https://testnet.bscscan.com)
3. in the search box enter the contract address and search.
4. go to the contract tab 
5. click on the **verify and publish** option
6. on the verify page select compiler - solidity single file, compiler version - solidity 0.8.0 , license - MIT click next
7. copy the contract source code and paste in the source code box and click on verify
8. your contract will be verified

## Dev Support
[Linkedin](https://www.linkedin.com/in/sks71093/)

Email: singhshivam071093@gmail.com
