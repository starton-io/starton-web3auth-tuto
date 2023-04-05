 # Creating Metatransactions with Web3Auth and Starton

This project enables you to create meta transactions with Starton and Web3auth. Meta transactions are a useful way to onboard users to the Web3 ecosystem by allowing them to use their familiar social login system, and execute transactions without having to pay gas fees or have Ether in their wallets.

By using two routes on Starton,  you can create meta transactions. This use case is handy when you want to onboard users to web3.

> You will need: 
> 
>- A smart contract that implements ERC20 interface. 
> Starton Smart contract templates support Metatransactions. To deploy an ERC20 with Starton, go to [How to create your own crypto currency](https://docs.starton.io/docs/Tutorials/creating-token-ERC20-mintable). 
> - A Starton API key 
> 

## Installing the project

> The project has been set up using a client-side and a server-side so that your API key is not exposed on client. You can also use the server-side to connect a database for metrics.
> 

### **Creating Starton Project**

1. Clone the project from **[Starton Metatransactions GitHub](https://github.com/starton-io/starton-web3auth-tuto)**.

### Setting up the server side.

1. In `server`, add your Starton API key in **`.env`**.
2. In `src` > `config` > **`startonconfig.ts`**, set the following parameters:
    - Smart contract call URL (ex: /smart-contract/avalanche-fuji/0xcEB17Bf0E3d198ec985370f456332f10f373CdB3/call)
    - Speed of your transaction (ex: low, average, fast, fastest)
    - Signer wallet
    - Amount of requested funds

Let’s continue with our config files in client. 

### Setting up our client side

1. Install the client side.
2. In `client`, add the port where your server is running in **`.env`**.
3. In `src` > `config` >`smart-contract` go to **`smartContract.config.ts`** and set the following parameters: 
    - version
    - name
    - chainId
    - address
    
    > You can retrieve all of this information using the interact tab of your smart contract. [Learn more](https://docs.starton.io/docs/Smart-contract/interacting-with-a-smart-contract)
    > 
4. In `src` > `config` > `**smart-contractABI.config.ts**`, enter the ABI of your contract. 
5. In starton,  go to `**starton.config.ts**`,enter the value of the meta transaction. 
6. In `src` > `services`>  `**ethersRPC.ts**`, enter the wallet from which to transfer.
7. In `src` > `hooks`> `**useWeb3AuthInit.ts**`: 
    1. In `chainId`, replace the value in `Number(*43113*)` with the `chainId` of your network.
    2. In `rpcTarget`, enter the address of your node, such as  `'https://api.avax-test.network/ext/bc/C/rpc'`.
    
    > You can find public nodes on [https://chainlist.org/](https://chainlist.org/)
    > 

Now that we’re all set, let’s run our project. 

## Running the project

1. In `server`, run the command **`npm run build`**
2. Then, run `**npm run start**`
3. In `client`, run the command `**npm run build**` 
4. Then, run `**npm run start**`
    
    Visit [http://localhost:3000](http://localhost:3000/) to test your project. 
    

Now that you have used our project, visit this guide to learn more about the project 

